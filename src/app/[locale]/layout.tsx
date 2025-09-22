// app/layout.tsx
import "@/css/globals.css";
import type { Metadata } from "next";
// import QueryProvider from "@/providers/query-provider";
// import ToastProvider from "@/providers/toast-provider";
import I18nProvider from "@/providers/i18n-provider";
// import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/layout/nav-bar/nav-bar";
import Footer from "@/layout/footer/footer";
export const metadata: Metadata = {
  title: "Viganium",
  description: "نحن نصنع حضورًا رقميًا يتحدّث عنك!",
};

interface Props {
  children: React.ReactNode;
  // Next's generated types may use Promise<{ locale: string }>, so accept either
  params: { locale: string } | Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <I18nProvider locale={locale}>
          <NavBar />

          {children}
          <Footer />

        </I18nProvider>

      </body>
    </html>
  );
}
