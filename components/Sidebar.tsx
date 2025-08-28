'use client'

import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
  return (
    <>
      <div className="sidebar bg-[#11455D] text-white h-screen w-[18%] flex flex-col gap-2 px-4 py-4">
        <Link href='/'> <div className="logo"><Image width={146} height={72} src="/images/Logo.svg" alt="logo" /></div> </Link>

        <ul className='flex flex-col gap-2 py-4'>
          <li className="w-full cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Home</li>
          <li className="w-full cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Stages & Checklist</li>
          <li className="w-full cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Upload Docs</li>
          <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Preferred Vendors</li>
          <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Tech Stack</li>
          <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Targets</li>
          <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">Zee Sales Targets</li>
          <li className="cursor-pointer text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">MAI Settings</li>
          <li className="cursor-pointer flex gap-3 items-center text-white/60 hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300">
            Pending Questions <span className="badge flex justify-center items-center h-5 w-5 rounded-full bg-[#F9FAFB] text-[#344054] text-xs">3</span>
          </li>
        </ul>

        <div className="flex-grow" /> 
        <span className="logout text-white/50 cursor-pointer hover:text-[#5DD2DD] hover:bg-white/10 px-4 py-2 rounded-md transition-all duration-300"> Logout </span>
      </div>
    </>
  )
}

export default Sidebar
