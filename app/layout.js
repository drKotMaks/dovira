import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/page";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./_components/Footer/Footer";



const inter = JetBrains_Mono({ subsets: ["cyrillic"] });




export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <SessionProvider>
          <body>
            <Header/>
            {children}
            <Footer/>
            <Toaster/>
          </body>
      </SessionProvider>
    </html>
    
  );
}
