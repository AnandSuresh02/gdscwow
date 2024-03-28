import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Timer from "@/components/Timer";
import Wow_logo from "@/public/wow_logo.png";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
        <NavBar />
        
        <Footer/>
    </div>
  );
}
