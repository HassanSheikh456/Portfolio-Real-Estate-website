import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'

        };
    }, [showMobileMenu])

    const navItems = [{ href: "#Header", name: "Home" }, { href: "#About", name: "About" }, { href: "#Projects", name: "Projects" }, { href: "#Testimonials", name: "Testimonials" },]

    return (
        <div className='absolute top-0 left-0 w-full z-10'>

            <div className='container flex mx-auto  justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

                <img src={assets.logo} alt="" />

                <ul className='hidden md:flex gap-7 text-white'>
                    {navItems.map(({ href, name }) => (
                        <li key={href}> 
                            <a href={href} className='cursor-pointer hover:text-gray-500' >{name}</a>
                        </li>

                    ))}
                </ul>

                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

                <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>

            {/* -------mobile menu------- */}

            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} top-0 right-0 bottom-0 
                overflow-hidden bg-white transition-all`}>

                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6' />
                </div>

                <ul className='flex flex-col items-center gap-0  px-5 text-lg font-semibold'>
                    {navItems.map(({ href, name }) => (
                        <li key={href}>
                            <a onClick={() => setShowMobileMenu(false)} href={href} className='px-4 py-2 rounded-full inline-block'>{name}</a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Navbar 
