import Image from "next/image";
import logo from "@/assets/images/home_page_logo.png"
import { BarChart, CircleDollarSign, House, Newspaper, UserCircle2 } from "lucide-react";
import Link from "next/link";


const navLinks = [
    { name: "Stake House", path: "/" ,icon:<House className="max-w-10 w-[70%]"/>},
    { name: "Feeds", path: "/about", icon:<Newspaper className="max-w-10 w-[70%]"/> },
    { name: "Earn", path: "/earn",icon:<CircleDollarSign className="max-w-10 w-[70%]"/> },
    { name: "Ranking", path: "/contact", icon:<BarChart className="max-w-10 w-[70%] "/>},
]

const HomeHeader = () => {
    return (
<>
        <div className=" px-5 pt-4  md:mb-0 mb-2 flex ">

            {/* <div className="idden"> */}


            <div className="w-18 md:block idden">
                <Image src={logo} alt="logo" />
            </div>


            <div className=" md:flex hidden gap-10 mx-auto ">
                {navLinks.map((link) => (
                    <Link href={link.path} key={link.name} className="text-blue  tracking-[1.5%] hover:text-blue-500">

                        {link.name}
               
                    </Link>
                ))}
                </div>



                {/* </div> */}


            <div className="flex  text-blue md:ms-0 ms-auto">

                <div>
                    <p>29399
                        <span className="ps-1 pe-2 font-semibold">STK</span>
                    </p>
                </div>
                <div>
                    <UserCircle2 />
                </div>


            </div>
        </div>

                <div className="w-screen px-3 md:hidden  max-w-[550px] fixed bottom-0 bg-white border-t-2">
                    <div className="flex justify-between">

                {navLinks.map((link) => (
                    <Link href={link.path} key={link.name} className="text-blue  tracking-[1.5%] py-3  hover:text-blue-500">
                     <div className="flex  text-xs items-center " >
                        <span className=" ">{link.icon}</span>
                        {link.name}
                       </div>
                    </Link>
                ))}
                </div>
                </div>

                </>
    );
}

export default HomeHeader;