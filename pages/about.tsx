import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HorizontalImageSlider from "@/components/ImageSlider";
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
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-white font-bold  text-[50px] lg:text-[150px]">
          GDSC WoW Kerala
        </h1>
        <p className="md:px-56 md:text-xl text-sm lg:text-center text-justify flex justify-center items-center px-4 mb-8">
          GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies. We are a part of Google Developers Student Clubs, a program for students to learn about Google technologies and build solutions for their local communities.
        </p>
      </div>
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