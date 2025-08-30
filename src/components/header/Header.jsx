import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#1c1e53]'>
        <div className="container">
            <nav className='flex items-center justify-between text-white h-[92px]'>
                <Link to={"/"}>
                    <img src={logo} alt="" />
                </Link>
                <ul className='flex gap-10'>
                    <li>
                    <Link className='hover:text-white text-[#bbbbcb] duration-300' to={"/"}>Home</Link>
                    </li>
                    <li>
                    <Link className='hover:text-white text-[#bbbbcb] duration-300' to={"/about"}>About us</Link>
                    </li>
                    <li>
                    <Link className='hover:text-white text-[#bbbbcb] duration-300' to={"/pricing"}>Pricing</Link>
                    </li>
                    <li>
                    <Link className='hover:text-white text-[#bbbbcb] duration-300' to={"/work"}>Work</Link>
                    </li>
                    <li>
                    <Link className='hover:text-white text-[#bbbbcb] duration-300' to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                          <Link className='hover:text-white text-[#bbbbcb] duration-300 border py-4 px-12 rounded-full ' to={"/contact"}>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header