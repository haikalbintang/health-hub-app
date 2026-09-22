import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/profile"];
const AUTH_ONLY_ROUTES = ["/login", "/register"];

// Decodes the JWT payload to check expiry without verifying the signature.
// Signature verification happens in the backend on each proxied request.
function isTokenExpired(token: string): boolean {
  try {
    const payload = token.split(".")[1];
    if (!payload) return true;

    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const decoded = JSON.parse(
      new TextDecoder().decode(
        Uint8Array.from(atob(padded), (c) => c.charCodeAt(0)),
      ),
    ) as { exp?: number };

    if (typeof decoded.exp !== "number") return false;
    return decoded.exp * 1000 <= Date.now();
  } catch {
    return true;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("access_token")?.value;
  const isActiveSession = Boolean(token) && !isTokenExpired(token!);

  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );
  if (isProtected && !isActiveSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const isAuthRoute = AUTH_ONLY_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (isAuthRoute && isActiveSession) {
    const next = request.nextUrl.searchParams.get("next");
    return NextResponse.redirect(
      new URL(next && next.startsWith("/") ? next : "/profile", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/login", "/register"],
};