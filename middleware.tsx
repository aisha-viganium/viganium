// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, authRoutes } from "@/constants/routes";

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  return locales.includes(cookieLocale || "") ? cookieLocale! : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // استخراج الجزء الأول من المسار (مثل "ar", "en")
  const pathnameParts = pathname.split("/");
  const maybeLocale = pathnameParts[1];
  const hasLocale = locales.includes(maybeLocale);
  const locale = getPreferredLocale(request);

  // ✅ إعادة التوجيه إن لم يوجد لغة في أول جزء
  if (!hasLocale) {
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
    return response;
  }

  // باقي المعالجة
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
  // Add current path & full URL to request headers
  response.headers.set("x-url", request.url);
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}
// ✅ ضيف ده في آخر الملف
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|icons|.*\\..*).*)",
  ],
};
