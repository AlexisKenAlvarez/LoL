import { useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import useDetectScroll from "@smakss/react-scroll-direction";


const Nav = () => {

    const navList = [
        {
            title: 'home',
            link: '#home',
            type: 'internal'
        },
        {
            title: 'about',
            link: '#about',
            type: 'internal'
        },
        {
            title: 'tokenomics',
            link: '#tokenomics',
            type: 'internal'
        },
        {
            title: 'roadmap',
            link: '#roadmap',
            type: 'internal'
        },
        {
            title: 'tournament',
            link: '#tournament',
            type: 'internal'
        },
        {
            title: 'whitepaper',
            link: '',
            type: 'external'
        },
    ]

    const scrollDir = useDetectScroll({});

    const [scrollPosition, setScrollPosition] = useState(0);
    const [navActive, setNav] = useState(false)
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNav = () => {
        setNav(curr => !curr)
    }

    return (
        <>
            {/* Nav mobile */}
            <nav className={`w-full h-screen top-0 left-0 fixed z-[51] bg-black transition-all ease-in-out duration-500 ${navActive ? 'translate-x-0 opacity-100 lg:translate-x-full' : 'translate-x-full opacity-0'}`}>
                <img src="/logo.webp" alt="Logo" className="w-20 mx-auto mt-10 relative z-10" />
                <div className="w-20 h-20 rounded-full absolute left-0 right-0 bg-cyn mx-auto top-10 opacity-60 blur-[3rem]"></div>
                <button className="" onClick={handleNav}>
                    <IoCloseSharp className="absolute text-white text-3xl top-5 right-5" />
                </button>

                <ul className="gap-y-9 text-white font-semibold w-fit flex flex-col items-center justify-center mx-auto mt-10">
                    {navList.map((items) => {
                        return (
                            <li className="uppercase" key={items.title}>
                                {items.type === 'external' ?
                                    <a href={items.link} rel="noopener noreferrer" target="_blank" className="">
                                        {items.title}
                                    </a> :
                                    <a href={items.link} className="">
                                        {items.title}
                                    </a>}
                            </li>
                        )
                    })}
                </ul>

            </nav>

            {/* Nav desktop */}
            <nav className={`h-auto px-5 font-secondary w-full fixed top-0 left-0 transition-all ease-in-out duration-500 z-[50] ${scrollPosition > 0 ? 'bg-black/90' : ''} ${scrollDir === 'down' ? '-translate-y-1/2 opacity-0' : 'translate-y-0, opacity-100'}`}>
                <div className="max-w-[1400px] w-full mx-auto flex justify-center py-5 pb-6 pt-8">

                    <ul className=" gap-x-12 text-white font-semibold w-fit lg:flex hidden items-center">
                        {navList.map((items) => {
                            return (
                                <li className="uppercase" key={items.title}>
                                    {items.type === 'external' ?
                                        <a href={items.link} rel="noopener noreferrer" target="_blank" className="">
                                            {items.title}
                                        </a> :
                                        <a href={items.link} className="">
                                            {items.title}
                                        </a>}
                                </li>
                            )
                        })}
                    </ul>

                    <p className="text-white font-bold lg:hidden block" onClick={handleNav} >MENU</p>
                </div>
            </nav>
        </>


    );
}

export default Nav;
