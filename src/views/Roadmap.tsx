import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GiFlamer } from 'react-icons/gi'
import Sphere from '../../videos/sphere.mp4'
import Footer from "../components/Footer";

const Roadmap = () => {

    const [selected, setSelected] = useState(0)

    const handleClick = (index: number) => {
        setSelected(index)
    }

    const phases = [
        {
            title: 'Foundation and 1v1 Mode (First Week)',
            list: [
                'Project Launch and Token Distribution',
                'Officially launch $LOL cryptocurrency',
                'Community Building and Awareness',
                'Set up social media accounts and community channels',
                'Launch a website with project details and user-friendly guides',
                'Engage with gaming and crypto communities to create awareness',
                '1v1 Tournament Pilot (First to Second day)',
                'Organize the inaugural 1v1 tournament',
                'Set up the Twitch account to stream the games',
                'Award winners with $LOL tokens and promote tournament results',
                'Feedback Collection and Refinement',
                'Gather feedback from participants to enhance user experience',
                'Address any issues and make necessary improvements',
                'Continue community engagement and building momentum',
            ],
            icon: <svg viewBox="0 0 100 100" className="fill-white w-6 mt-2"><path d="M67.84,56.35v5.5h0c8.62-8.62,14.37,0,14.37,0C112.14,40.78,90.35,2,90.35,2s-.72,17.24-15.08,27.77V46.29c-.24,4.79-3.84,7.9-7.43,10.06"></path><path d="M17.79,62.09s4.07-6.46,10.78-2.63L20.91,48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14,41,17.79,62.09"></path><path d="M26.89,83.89,32.4,65.21l-.24-.48L19.23,77.9A17.78,17.78,0,0,1,7.5,83.17H3L2,85.56l12,11.5Z"></path><path d="M92.27,83.89a16.24,16.24,0,0,1-11.74-5.27L68.8,66.88,72.63,84.6,85.8,98l12-11.49-1-2.4Z"></path><path d="M55.87,42.7c0,.24-.24.48-.24.71h.72c5.75.48,7.66,2.64,9.1,7.67a9.35,9.35,0,0,0,2.39-1.92c1-1,1.68-1.67,1.68-2.63V28.09a2,2,0,0,0-1.68-1.92L36.47,20.43H36a2.39,2.39,0,0,0-2.39,2.39v6.71l24.9,3.35Z"></path><path d="M60.18,54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78,48V44.13h5.51A4.09,4.09,0,0,0,50.36,41l1-3.35L32.4,35l-5,12.22,11.74,17L33.6,82.69,49.88,98,66.41,82.93s-6.23-28.5-6.23-29"></path><path d="M49.88,2.23,45.09,12.52l4.79,3.83,4.79-3.83Z"></path><path d="M62.1,9.41l1.43,6h6l2.87-11Z"></path><path d="M30.25,15.4h6l.24-.72,1.2-5.27-10.3-5Z"></path></svg>
        },
        {
            title: "Summoner's Rift and ARAM Implementation (Second Week)",
            list: [
                "Summoner's Rift Tournament Planning",
                'Implement smart contracts for secure and transparent betting',
                'Collaborate with gaming experts to design fair and exciting tournaments',
                'Develop a tournament schedule and rules',
                'Marketing and Outreach',
                'Launch targeted marketing campaigns across gaming and crypto platforms',
                'Partner with gaming influencers to endorse the $LOL tournaments',
                'Engage in partnerships with related projects and platforms',
                "Summoner's Rift Tournament Launch ",
                "Introduce the Summoner's Rift mode with a grand tournament",

            ],
            icon: <svg viewBox="0 0 100 100" className="fill-white w-6 mt-2"><path d="M56.59,73.71l1.67-2.88c5.75-9.34,5.51-16,3.83-20.59a39.78,39.78,0,0,1-9.1,16,2,2,0,0,1-1.43.48H48.2A2.17,2.17,0,0,1,46.53,66a39.78,39.78,0,0,1-9.1-16c-1.68,4.55-1.68,11.26,3.83,20.59l1.68,2.88-3.36,5.75h0L49.64,96.94,59.7,79.22Z"></path><path d="M73.11,38.74c-3.35-4.31-6-10-6-18.91,0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74h0c-3.83,0-4.79,1.43-9.34,5.74-4.07,3.83-7.66,7.91-7.66,12,0,8.86-2.88,14.6-6,18.68L12.76,52.87,2.23,45.69V58.62S2.47,84,39.58,97.89c0,0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77,119.77,0,0,0,36.71,74h0c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77,22.77,0,0,1,7.42-8.86l9.58,9.58h0l9.58-9.58a22.77,22.77,0,0,1,7.42,8.86c2.4,5.27,3.59,12.93-1.43,23.23C64.73,71.31,64,72.51,63.29,74h0A119.77,119.77,0,0,0,76.94,56.47c0,1.19,0,8.62-.24,10.29C74.31,90.71,60.42,97.89,60.42,97.89,97.53,84,97.77,58.62,97.77,58.62V45.69L87.24,52.87Z"></path></svg>
        },
        {
            title: 'Continuous Enhancement (Ongoing)',
            list: [
                'Gather insights from all modes to refine the platform',
                'Implement user-requested features to enhance the experience',
                'Maintain security and transparency through regular audits',
                'E-Sports Partnerships and Major Events',
                'Collaborate with e-sports organizations for major $LOL tournaments',
                'Host flagship events with larger prizes and wider recognition',
                'Further Marketing and Adoption',
            ],
            icon: <svg viewBox="0 0 100 100" className="fill-white w-6 mt-2"><path d="M28.69,27.25h6.94l1.92-6.94L24.14,12.4Z"></path><path d="M71.31,27.25,75.86,12.4,62.45,20.31l1.92,6.94Z"></path><path d="M71.31,35.39c-1.43,0-12.21-3.83-12.21-3.83L50,42.34,40.9,31.56s-10.54,3.83-12.21,3.83c-7.67,0-4.79-7.18-4.79-7.18S4.26,48.32,2.11,64.13c0,0,5.74-8.86,24.42-13.17A26.22,26.22,0,0,0,40.42,63.89c-.72-3.11-1.44-6.71-2.15-10.06a22.36,22.36,0,0,1-3.84-4.31c.72,0,7.19-.72,8.15-.72.71,2.64,4.55,28.74,4.55,28.74l-7,10.3v10L50,93.82l9.82,4.07V87.6l-7-10.3s3.84-26.1,4.55-28.74c.72,0,7.19.72,8.15.72a16.52,16.52,0,0,1-3.84,4.31,98.08,98.08,0,0,0-2.15,10.06A25.33,25.33,0,0,0,73.47,50.72c18.68,4.55,24.42,13.17,24.42,13.17C95.74,48.32,76.1,28,76.1,28s2.88,7.42-4.79,7.42"></path><path d="M50,2.11,42.34,23.42h.24L50,33.24l7.42-9.82h.24Z"></path></svg>
        },
    ]

    const arr = [...new Array(3)]

    return (
        <>

            <section className="w-full min-h-screen relative z-10 px-5 bg-bg" id='roadmap'>
                <div className="max-w-[1400px] w-full mx-auto">
                    <img src="/roadmap/map.webp" alt="Map" className="absolute left-0 right-0 mx-auto" />
                    <div className="relative z-10 w-fit mx-auto my-auto h-fit overflow-hidden p-3">
                        <h1 className="text-center font-primary text-2xl font-bold text-white italic mt-[20rem] text-shadow">LEAGUE PATH</h1>
                        <h1 className="text-center font-primary text-5xl sm:text-7xl md:text-8xl font-bold text-white italic text-shadow">ROADMAP</h1>
                    </div>
                </div>
            </section>
            <section className="w-full min-h-[80vh] h-auto relative z-10 items-start pt-28">

                <video
                    src={Sphere}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0 opacity-30"

                />

                <div className="mx-auto w-full flex lg:flex-row flex-col">


                    <div className="w-full mx-auto items-center h-[40vh] lg:h-[70vh] flex gap-x-10 sm:gap-x-20 relative lg:pl-20 xl:lg:pl-44 lg:justify-start justify-center z-10">
                        <div className="absolute top-[7.8rem] bottom-0 my-auto w-full h-[1px] mx-auto left-0 right-0 bg-mocha/70 z-10"></div>
                        {phases.map((phase, index) => {
                            return (
                                <button className="flex flex-col items-center group" key={index} onClick={() => { handleClick(index) }}>
                                    <div className="w-20 h-20 flex items-center justify-center relative">
                                        <svg viewBox="0 0 100 100" className={`w-16 absolute top-0 left-0 right-0 bottom-0 m-auto transition-all ease-in-out duration-300 ${selected === index ? 'scale-1' : 'scale-[0]'}`}>
                                            <path className="road-svg" d="M59.84,7.78,50,17.63,45.57,13.2,40.16,7.78a46.63,46.63,0,1,0,19.68,0Zm-12,12L50,22l2.2-2.19,4.67-4.67a38.86,38.86,0,1,1-13.74,0ZM50,96.89A43.52,43.52,0,0,1,39.18,11.21l2.59,2.59a40.42,40.42,0,1,0,16.46,0l2.59-2.59A43.52,43.52,0,0,1,50,96.89Z">
                                            </path>
                                            <path d="M55.44,5.44,50,10.88,44.56,5.44,50,0Z" className="road-svg">
                                            </path>
                                        </svg>

                                        <div className={`text-white text-3xl font-primary font-bold transition-all ease-in-out duration-300 ${selected === index ? 'scale-1 opacity-100' : 'scale-[0.9] opacity-50 group-hover:opacity-100 group-hover:scale-100'}`}>
                                            {phase.icon}
                                        </div>

                                    </div>
                                    <h1 className="font-primary font-medium text-xl text-white">Phase {index + 1}</h1>
                                    <div className="w-[1px] h-6 -mb-2 bg-mocha"></div>
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center relative">
                                        <div className={`w-full h-full absolute rounded-full border-mocha border-[1px] top-0 left-0 transition-all ease-in-out duration-300 ${selected === index ? 'scale-1' : 'scale-0'}`}></div>
                                        <div className={`w-2 h-2 bg-mocha rounded-full`}></div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    <div className="w-full lg:pr-20 xl:pr-44 mt-20 max-w-[20rem] sm:max-w-[23rem] mx-auto lg:max-w-[50rem] lg:mx-0 lg:mt-0 relative">

                        <div className="w-full h-full border-[1px] border-mocha/70 relative bg-bg/30 backdrop-blur-sm">
                            <AnimatePresence mode="wait">
                                {arr.map((items, i) => {
                                    return (
                                        selected === i ?
                                            <motion.div initial={{ opacity: 0, scaleY: 0.5 }}
                                                animate={{ opacity: 100, scaleY: 1 }}
                                                exit={{ scaleY: 0.5, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 0.77, 0.47, .97] }}
                                                className=""
                                                key={i}>
                                                <img
                                                    src={`/roadmap/phase${selected + 1}.webp`}
                                                    alt={`RoadImage${items + 1}`}
                                                    className="absolute w-[15rem] left-0 mx-auto z-10 -translate-y-1/2 top-0 right-0"

                                                />
                                            </motion.div>

                                            : null

                                    )
                                })}
                            </AnimatePresence>

                            <div className="w-20 h-20 absolute top-0 right-0 border-t-4 border-r-4 border-mocha "></div>
                            <div className="w-20 h-20 absolute bottom-0 left-0 border-t-4 border-r-4 border-mocha rotate-180"></div>
                            <AnimatePresence mode="wait">
                                {phases.map((items, index) => {
                                    return (
                                        selected === index ?
                                            <motion.div
                                                initial={{ maxHeight: '0rem', }}
                                                animate={{ maxHeight: '80rem', }}
                                                transition={{ duration: 5, ease: [0.16, 0.77, 0.47, .97] }}
                                                className='text-white relative z-10 overflow-hidden'
                                                key={index}>
                                                <div className="p-8 w-full h-full">
                                                    <h1 className="font-primary text-3xl font-bold text-mocha">Phase {index + 1}</h1>
                                                    <h2 className="font-primary text-xl font-medium text-shadow">
                                                        {items.title}
                                                    </h2>
                                                    <ul className="flex flex-col gap-y-3 mt-10">
                                                        {items.list.map((item, index) => {
                                                            return (
                                                                <li className="font-secondary flex items-center gap-x-2 text-white/80" key={index}>
                                                                    <GiFlamer />
                                                                    <p className="">
                                                                        {item}
                                                                    </p>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>

                                            </motion.div> : null
                                    )
                                })}
                            </AnimatePresence>

                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

export default Roadmap;