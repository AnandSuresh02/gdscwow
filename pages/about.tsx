import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HorizontalImageSlider from "@/components/About/ImageSlider";
import Aboutgdsc from "@/components/About/Aboutgdsc";
const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
  const images = [
    { src: '/wow_circle.png', alt: 'Image 1' },
    { src: '/wow_circle.png', alt: 'Image 2' },
    { src: '/wow_circle.png', alt: 'Image 3' },
    { src: '/wow_circle.png', alt: 'Image 4' },
    { src: '/wow_circle.png', alt: 'Image 4' },
    { src: '/wow_circle.png', alt: 'Image 4' },
    { src: '/wow_circle.png', alt: 'Image 4' },
    { src: '/wow_circle.png', alt: 'Image 4' },

  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <NavBar />
      <Aboutgdsc />
      <HorizontalImageSlider images={images} />
      <div className="flex flex-col md:flex-row justify-end items-center md:justify-center">
        <button className="h-20 ease-in-out duration-300 z-20 w-64 gradColor font-medium text-md md:text-xl rounded-sm md:my-8 my-4 mx-4">
          Click Here
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;