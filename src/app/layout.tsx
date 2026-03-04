import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      {/* KHÔNG CÒN LENIS Ở ĐÂY NỮA */}
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}