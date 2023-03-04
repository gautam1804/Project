import React from "react"
import css from '../css/index2.css'

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../video/xception-logo.png"

const Navbar = ({active}) => {

  const [toggleMenu, setToggleMenu] = React.useState(false)

  const NavbarItem = ({ title, classProps}) => {
    return(
      <li className={`mx-4  cursor-pointer ${classProps} ${title === active && 'white-glassmorphism'}`}>
        {title}
      </li>
    )
  }

  return(
    <nav className="w-full flex md:justify-center justify-between items-center p-4 white-glassmorphism-no-border" >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 mr-64 ml-10 cursor-pointer"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "Merchandise", "Sponsors", "Events", "Competitons", "About Us", "Gallery", "Team"].map((item, index)=>(
              <NavbarItem key={item+index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</li>
      </ul>
      <div className="flex relative">
        {
          // toggleMenu?<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(false)}/>:
          // <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)}/>
          !toggleMenu && <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=>setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70w] h-screen shadow-2xl md:hidden
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
              </li>
              {["Home", "Merchandise", "Sponsors", "Events", "Competitons", "About us", "Gallery", "Team"].map((item, index)=>(
              <NavbarItem key={item+index} title={item} classProps="my-2 text-lg"/>
              ))}
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar

