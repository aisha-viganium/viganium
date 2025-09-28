// app/layout.tsx
import NavBar from "@/layout/nav-bar/nav-bar";
import type { Metadata } from "next";
import Footer from "@/layout/footer/footer";
import I18nProvider from "@/providers/i18n-provider";
import "../../css/globals.css";

export const metadata: Metadata = {
  title: "Viganium",
  description: "نحن نصنع حضورًا رقميًا يتحدّث عنك!",
  icons: {
    icon: "/assets/logo-icon.svg",
  },
};

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;

  }
) {
  return (
    <html lang="ar" dir="rtl">
      <body>

        <I18nProvider>
          <NavBar />
          <main className="max-w-[100vw] overflow-hidden">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
