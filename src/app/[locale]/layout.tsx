import NavBar from "@/layout/nav-bar/nav-bar";
import type { Metadata } from "next";
import Footer from "@/layout/footer/footer";
import I18nProvider from "@/providers/i18n-provider";
import "../../css/globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Viganium",
  description: "نحن نصنع حضورًا رقميًا يتحدّث عنك!",
  icons: {
    icon: "/assets/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <I18nProvider>
          <NavBar />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
