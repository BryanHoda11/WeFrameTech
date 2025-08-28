'use client'
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <div className="header flex items-center gap-7 bg-white border-b px-4 justify-end py-4 w-full">
                <IoSettingsOutline size={20} className="cursor-pointer"/>
                <Image width={200} height={200} className="h-10 w-10 rounded-full cursor-pointer" src="/images/User.webp" alt="user" />
            </div>
        </>
    )
}

export default Header
