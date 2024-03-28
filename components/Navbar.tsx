import { Button } from "./ui/button";
import Wow_Circle from "@/public/wow_circle.png";
import Image from "next/image";
/**
 * @todo Login button is currenlty commented !
 * @returns ReactNode
 */
export default function NavBar() {
  return (
    <div className="flex flex-col dark fixed z-50 w-full">
      <div className="flex flex-row justify-evently gap-4 z-50 h-10 m-5 p-2">
        <img alt="WoW Logo" src={Wow_Circle.src} className="h-10 w-10" />
        <h1 className="text-[25px] leading-10">GDSC WoW</h1>
        {/* <Button variant={'outline'}>Login</Button> */}
      </div>
      <hr className="bg-white" />
    </div>
  );
}
