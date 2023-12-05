import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Next Shadcn Template",
  description: "Generated by Next Shadcn Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <main className="flex-1">
              <div className="mx-auto max-w-screen-2xl p-6 md:p-10 bg-gray-50 dark:bg-slate-950 h-full">
                <Providers>{children}</Providers>
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}