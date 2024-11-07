import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/page";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { setting } from "@/lib/setting";



const inter = JetBrains_Mono({ subsets: ["cyrillic"] });


export const metadata = {
  title: "Стоматологічна клініка Довіра",
  description: "Стоматологія в Полтаві",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <SessionProvider>
          <body>
            <Header/>
            {children}
            <Toaster/>
          </body>
      </SessionProvider>
    </html>
    
  );
}
