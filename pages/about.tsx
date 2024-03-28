import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalImageSlider from "@/components/ImageSlider";
const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
  const images = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-white font-bold  text-[50px] lg:text-[150px]">
          GDSC WoW Kerala
        </h1>
        <p className="text-white font-normal text-[20px]">
          GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies. We are a part of Google Developers Student Clubs, a program for students to learn about Google technologies and build solutions for their local communities.
        </p>
      </div>
      <VerticalImageSlider images={images} />
      <Footer />
    </div>
  );
};

export default AboutPage;