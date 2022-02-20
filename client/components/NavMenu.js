import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavMenu () {
    const [visible, setVisible] = useState(false);
    
    const onMenuButton = () => {
        setVisible(!visible);
    }
   
    return(
        <nav className="flex items-center justify-between p-2 h-20 mr-2 ml-2">
            <div className="flex items-center justify-center">
            <Image src="/logo-web.svg" alt="" width="45" height="45" />
            <div className="flex flex-col ml-3">
                <span className="font-architect text-sm text-[#27292B] tracking-wider">BlackBird</span>
                <span className="font-anton text-sm text-[#D99700] uppercase tracking-wider">Cultur Lab</span>
            </div>
            </div>
            <div className="hidden lg:flex space-x-10 mx-4">
            <a href="/#about" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">About</a>
            <Link href="/blog"><a className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">Blog</a></Link>
            <a href="/#contact" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">Contact</a>
            </div>
            {/* Mobile */}
            <div className={ visible ? `hidden`: `visible lg:hidden`}>
            <button onClick={onMenuButton} className="flex items-center px-3 py-2 border rounded border-[#574646]">
                <svg
                className="fill-current h-3 w-3 text-[#574646]"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            </div>
            <div className={ visible ? 'visible mb-5 lg:hidden' : 'hidden'}>
            <ul className="w-[35vw] md:w-[15vw] bg-[#F4EBCD]/25 py-2 rounded-lg mt-10">
                <li onClick={onMenuButton} className="cursor-pointer font-lat text-right pr-2">X</li>
                <li><a href="#about" className="pl-2 font-lato ">About</a></li>
                <li><Link href="/blog"><a className="pl-2 font-lato ">Blog</a></Link></li>
                <li><a href="#contact" className="pl-2 font-lato">Contact</a></li>
            </ul>
            </div>
        </nav>
    );
}