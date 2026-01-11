import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const isLogin = request.cookies.get("token");
  /* if (request.nextUrl.pathname.startsWith("/about")) {
    response.cookies.set("token", "abc123", {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    response.headers.set("my-custom-header", "abcd123");
  } */
  if (!isLogin && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return response;
}

export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
