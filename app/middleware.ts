import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  publicRoutes: (req: NextRequest) =>
    !req.nextUrl.pathname.includes('/home'),

  beforeAuth: (req) => {
    // Directly proceed to Clerk's auth middleware
    return req;
  },

  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
