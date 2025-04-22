import Image from "next/image";
import logo from "@/assets/images/home_page_logo.png"
import { UserCircle2 } from "lucide-react";
import Link from "next/link";


const navLinks = [
    { name: "Stake House", path: "/" },
    { name: "News Feeds", path: "/about" },
    { name: "Earn", path: "/earn" },
    { name: "Ranking", path: "/contact" },
]

const HomeHeader = () => {
    return (
        <div className=" px-5 pt-4 flex ">

            <div className="w-18">
                <Image src={logo} alt="logo" />
            </div>


            <div className="flex gap-16 mx-auto ">
                {navLinks.map((link) => (
                    <Link href={link.path} key={link.name} className="text-blue tracking-[1.5%] hover:text-blue-500">
                        {link.name}
                    </Link>
                ))}
                </div>

            <div className="flex  text-blue">

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
    );
}

export default HomeHeader;