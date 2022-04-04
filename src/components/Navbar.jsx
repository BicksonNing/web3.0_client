import React, { useState } from "react";
import logo from "../images/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between md:justify-center items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='Logo' className='w-32 cursor-pointer' />
      </div>

      <ul className='text-white hidden list-none md:flex flex-row justify-center items-center flex-initial '>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
          <NavbarItem key={item + i} title={item} />
        ))}

        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546db]'>
          Login
        </li>
      </ul>

      <div className='flex relative'>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {toggleMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3 w-[75vw] h-screen shadow-2xl md:hidden list-none flex flex-col items-end rounded-md blue-glassmorphism animate-slide-in'>
            <li className='text-xl w-full my-2 text-white'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>

            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
              <NavbarItem
                key={item + i}
                title={item}
                classProps='my-2 text-lg text-white'
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
