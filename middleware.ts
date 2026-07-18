import { NextRequest, NextResponse } from "next/server";

const maintenanceMode = true;

export function middleware(request: NextRequest) {

  if (!maintenanceMode) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL("/maintenance", request.url)
  );
}

export const config = {
  matcher: ["/((?!api).*)"],
};