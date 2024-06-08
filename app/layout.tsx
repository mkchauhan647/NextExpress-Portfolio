import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manoj's Portfolio",
  description: "This is my personnel website portfolio where I have included all projects that I have done in past and currently doing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="container  w-[85%] overflow-auto md:ml-[12pxx]   md:w-full mx-auto z-[-2]  bg-slate-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] ">  {/*use md:ml-3 for centering on mobile device*/}

        {/* <div className="fixed  h-full w-full bg-slate-950">

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          </div>
        </div> */}
        {/* <div className="absolute top-0 z-[-2] w-full h-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"> */}


        {/* </div> */}

        
        {/* <div className="absolute inset-0 -z-10  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        
        </div>
        </div> */}

        {/* <div className="fixed top-0 z-[-2] h-screen w-screen rotate-1800 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"> */}
          
        {/* </div> */}
        {children}




        {/* <div className="relative ml-[24px] "> */}

          
       {/* </div> */}


        

        {/* <Navbar/> */}
        <Footer/>



      </body>
    </html>
  );
}
