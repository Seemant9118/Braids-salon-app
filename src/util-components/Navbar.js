"use client"

// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import cart from '../../assets/add-cart-icon.png';



export default function Navbar() {
    const router = useRouter();
    const pathName = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    
    // const [navColorChange, setNavColorChange] = useState(false);

    const navList = [
        { title: 'home', path: '' },
        { title: 'services', path: 'service' },
        { title: 'testimonials', path: 'testimonial' },
        { title: 'about', path: 'about' },
        { title: 'contact', path: 'contact' },
    ];

    const handleMenuBtn = () => {
        setTimeout(() => setMenuOpen(!menuOpen), 500);
    }
    // menuOpen ? disableBodyScroll(window.document) : enableBodyScroll(window.document);

    // scrollbar - function
    // const handleNavColor = () => {
    //     window.scrollY >= 0 && window.scrollY <= scrollLimit ? setNavColorChange(true) : setNavColorChange(false);
    // }
    // window.addEventListener("scroll", handleNavColor);

    return (
        <div className="sticky top-0 z-20 shadow-md bg-white">
            <div className="lg:h-32 md:h-28 sm:h-24 h-16 w-full lg:px-10 md:px-5 px-2 pt-2 pb-2 grid grid-cols-3 text-primary">
                {/* Mobile hamburgerMenu */}
                <div className="h-full lg:hidden flex justify-start items-center">
                    <div className="md:w-1/12 w-2/12 " onClick={handleMenuBtn}>
                        {menuOpen ? <Image src={close} alt='close-icon' priority /> : <Image src={menu} alt='menu-icon' priority />}
                    </div>
                </div>

                <div id="nav-lists" className="h-full hidden lg:flex  justify-start items-center ">
                    <ul className="flex lg:gap-3 ">
                        {navList.map((item, id) => (
                            <li className={pathName === `/${item.path}` ? "text-sm font-bold text-black underline" : "text-sm hover:cursor-pointer hover:text-black"} key={id} onClick={() => router.push(`/${item.path}`)} >{item.title.toUpperCase()}</li>
                        ))}
                    </ul>
                </div>

                <div id="logo" className="h-full flex justify-center items-center">
                    <div className='object-conatin cursor-pointer'>
                        <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-bold">Braids</h1>
                    </div>
                </div>

                <div id="icons" className="h-full flex justify-end items-center">
                    <div className="md:w-1/12 w-2/12">
                    <Image src={cart} alt="cart-icon"/>
                    </div>
                </div>
            </div>
            {
                menuOpen ?
                    <div className="bg-white w-screen h-screen lg:px-10 md:px-5 px-2 absolute z-20">
                        <ul className="flex flex-col gap-10 items-start">
                            {navList.map((item, id) => (
                                <li className={pathName === item.path ? "w-full border-b-2 py-3 text-sm text-red-400 font-bold underline" : "w-full border-b-2 py-3 hover:cursor-pointer"} key={id} onClick={() => router.push(`/${item.path}`)}>{item.title.toUpperCase()}</li>
                            ))}
                        </ul>
                    </div> : ""
            }
        </div>
    )
}