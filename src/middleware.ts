import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = ["/home", "/profile", "/settings"];

  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  };
  
  return NextResponse.next();
};

export const config = {
  matcher: ["/home", "/profile", "/settings"],
};