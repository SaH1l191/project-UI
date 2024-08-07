import React from 'react'
import { Button } from "@/components/ui/button"
import icon from "../../../assets/Vercel/icon/light/vercel-icon-light.png"
import Logo from "../../../assets/Vercel/logotype/light/vercel-logotype-light.png"


const Navbar = () => {
  return (
    <div className=" flex h-14 items-center justify-center  border-b border-b-slate-800 z-100 sticky p-8 ">
      <div className='flex items-center justify-between w-[1400px] max-w-maxContent'>
      <div className='flex items-center space-x-10   '>

        <div className='flex items-center  py-3'>
          <img src={icon} height={10} width={35} />
          <img src={Logo} height={50} width={120} />
        </div>

        <div>
          <nav className="cursor-pointer text-sm text-gray-400  ">
            <ul className='flex items-center gap-6  '>
              <li className='hover:text-white transition-all duration-200'>ShowCase</li>
              <li className='hover:text-white transition-all duration-200'>Docs</li>
              <li className='hover:text-white transition-all duration-200'>Blog</li>
              <li className='hover:text-white transition-all duration-200'>Templates</li>
              <li className='hover:text-white transition-all duration-200'>Enterprise</li>
            </ul>
          </nav>
        </div>

      </div>

      <div className='space-x-2'>

        <Button variant="outline" className=""  size="vsm" >Sign In</Button>
        <Button variant="outline" className=""  size="vsm" >Sign Up</Button>

      </div>
      </div>
    </div>
  )
}

export default Navbar


