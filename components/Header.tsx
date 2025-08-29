'use client'

import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            {/* Header */}
            <div className="header flex items-center sticky top-0 z-30 bg-white border-b px-4 justify-between xl:justify-end py-4 w-full">
                {/* Hamburger - visible only below xl */}
                <RxHamburgerMenu
                    size={25}
                    onClick={() => setSidebar(prev => !prev)}
                    className="block xl:hidden cursor-pointer hover:text-[#279DD4]"
                />

                <div className="flex items-center gap-7">
                    <IoSettingsOutline size={20} className="cursor-pointer" />
                    <Image
                        width={200}
                        height={200}
                        className="h-10 w-10 rounded-full cursor-pointer"
                        src="/images/User.webp"
                        alt="user"
                    />
                </div>
            </div>

            {sidebar && <div className={`res-sidebar fixed top-0 left-0 h-screen overflow-y-scroll w-[85%] sm:w-1/2 bg-[#11455D] text-white z-40 transform transition-transform duration-300 ease-in-out ${sidebar ? "translate-x-0" : "-translate-x-full"}`} >

                <RxCross2 className="absolute top-4 right-4 cursor-pointer hover:text-[#5DD2DD]"
                    onClick={() => setSidebar(false)} size={20} />

                <div className="logo p-4">
                    <Link href="/">
                        <Image width={146} height={72} src="/images/Logo.svg" alt="logo" />
                    </Link>
                </div>

                <ul className="flex flex-col gap-2 py-4 px-4">
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Home</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Stages & Checklist</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Upload Docs</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Preferred Vendors</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Tech Stack</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Targets</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">Zee Sales Targets</li>
                    <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">MAI Settings</li>
                    <li className="cursor-pointer flex gap-3 items-center text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all">
                        Pending Questions{" "}
                        <span className="badge flex justify-center items-center h-5 w-5 rounded-full bg-[#F9FAFB] text-[#344054] text-xs">
                            3
                        </span>
                    </li>
                </ul>

                <div className="flex-grow" />
                <span className="logout block text-white/50 cursor-pointer hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md mb-4">
                    Logout
                </span>
            </div>}
        </>
    )
}

export default Header
