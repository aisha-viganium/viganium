// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, authRoutes } from "@/constants/routes";

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  return locales.includes(cookieLocale || "") ? cookieLocale! : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameParts = pathname.split("/");
  const maybeLocale = pathnameParts[1];
  const hasLocale = locales.includes(maybeLocale);
  const locale = getPreferredLocale(request);

  if (!hasLocale) {
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
    return response;
  }

  const pathWithoutLocale = "/" + pathnameParts.slice(2).join("/");
  const token = request.cookies.get("token")?.value;
  const isAuth = authRoutes.includes(pathWithoutLocale);

  if (isAuth && token) {
    const redirectUrl = new URL(`/${locale}/`, request.url);
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
    return response;
  }

  const response = NextResponse.next();
  if (!request.cookies.get("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  }
  response.headers.set("x-url", request.url);
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|icons|.*\\..*).*)",
  ],
};
