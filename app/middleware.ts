import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: (req: NextRequest) =>
    !req.nextUrl.pathname.includes('/dashboard'),

  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
