import { Button } from "./ui/button";
import Wow_Circle from "@/public/wow_circle.png";
import { useRouter } from "next/router"; // Import the useRouter hook
import Image from "next/image";
/**
 * @todo Login button is currenlty commented !
 * @returns ReactNode
 */
export default function NavBar() {
  const router = useRouter(); // Initialize the router

  // Function to handle navigation to the about page
  const handleAboutClick = () => {
    router.push("/about"); // Redirect to the about page
  };

  return (
    <div className="flex flex-col dark fixed z-50 w-full">
      <div className="flex flex-row justify-between items-center z-50 h-10 m-5 p-2">
        <div className="flex items-center gap-4">
          <img alt="WoW Logo" src={Wow_Circle.src} className="h-10 w-10" />
          <h1 className="text-[25px] leading-10 googleFont">GDSC WoW</h1>
        </div>
        <div className="flex items-center">
          <button
            className="text-white hover:text-gray-300 transition-colors duration-300"
            onClick={handleAboutClick} // Call handleAboutClick when the button is clicked
          >
            About
          </button>
          {/* Uncomment this when you want to include the login button */}
          {/* <Button variant={'outline'}>Login</Button> */}
        </div>
      </div>
      <hr className="bg-white" />
    </div>
  );
}
