'use client'

import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <>
            <div className="header flex items-center sticky top-0 z-50 bg-white border-b px-4 justify-between xl:justify-end py-4 w-full">
                <RxHamburgerMenu size={25} className="block xl:hidden cursor-pointer hover:text-[#279DD4]"/>
                <div className="flex items-center gap-7">
                    <IoSettingsOutline size={20} className="cursor-pointer" />
                    <Image width={200} height={200} className="h-10 w-10 rounded-full cursor-pointer" src="/images/User.webp" alt="user" />
                </div>
            </div>
        </>
    )
}

export default Header
