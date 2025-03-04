"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrConnect } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes"

const Navbar = () => {


    const { theme, setTheme } = useTheme();
    const [active, setActive] = useState<boolean>(true);
    const pathname = usePathname();
    const isActive = (path: Url) => pathname === path;

    const navs = [
        { id: 1, name: "Home", src: "/", icon: <IoHomeOutline /> },
        { id: 2, name: "About", src: "/about", icon: <CgProfile /> },
        { id: 3, name: "Skills", src: "/skills", icon: <FaLaptopCode /> },
        { id: 4, name: "Project", src: "/project", icon: <MdWorkOutline /> },
        { id: 5, name: "Contact", src: "/contact", icon: <GrConnect /> },
    ];

    return (
        <div className="max-w-[1600px] mx-auto relative">
            <div className="fixed md:hidden right-[1.5rem] top-[1.5rem]">
                    <ThemeToggle />
                </div>
            <div className="fixed bottom-[2rem] md:top-0 w-full max-w-[1600px] px-[0.9rem] sm:px-[1.5rem] md:px-[3rem] lg:px-[5rem] py-[1rem]  ">
            <div className="flex justify-between bg-transparent items-center">
                <h1 className="hidden md:block">Lite code</h1>
                <div className={`${theme === "light" ? "bg-[#b6b6b632] border-[#3c3c3c68]" : "bg-[#36363632] border-[#ffffff68]"} border-[0.3px] flex w-full md:w-auto md:gap-[0.2rem] justify-between items-center  backdrop-blur-md p-[0.4rem] rounded-xl`}>
                    {navs.map((item) => {
                        return (
                            <Link key={item.id} href={item.src} className="navbb w-[20%] md:w-auto">
                                <div className={` ${isActive(item.src) ? `${theme === "light" ? "bg-[#7b7b7b32] border-[#dadadae3] border-[0.3px]" : "bg-[#afafaf1f] border-[#56565668]"} border-[0.3px] ` : ""} w-full max-w-[] flex items-center gap-[0.6rem] py-[0.4rem] px-[0.4rem] sm:px-[1rem] rounded-xl `}>
                                    <div className="text-[1.3rem] mx-auto ">{item.icon}</div> <p className="hidden md:block">{item.name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar