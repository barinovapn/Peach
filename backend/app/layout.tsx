import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body style={{ margin: 0, padding: 0 }}>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}