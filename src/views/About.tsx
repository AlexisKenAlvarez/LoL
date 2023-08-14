import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import BotTop from '../anim/Bot2Top';

const About = () => {

    const animation = useAnimation()

    async function sequence() {

        animation.start({
            y: [20, -20],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })

    }

    useEffect(() => {
        sequence()
    }, [])


    return (
        <section className="w-full min-h-screen h-auto px-5 bg-bg relative" id="about">
            <motion.img animate={animation} src="/about/green.webp" alt="green" className="mx-auto md:w-auto w-[20rem] mb-auto md:relative absolute bottom-28 left-0 right-0 md:opacity-100 opacity-50" />

            <div className="absolute bottom-0 w-full left-0 botom-0">
                <img src="/about/fore.png" alt="Foreground" className="w-full object-bottom object-cover  z-10 absolute bottom-0 left-0" />
                <img src="/about/bg.png" alt="Foreground" className="w-full  object-bottom object-cover absolute left-0 -bottom-10" />
            </div>

            <div className="max-w-[1300px] w-full mx-auto absolute top-0 bottom-0 my-auto left-0 right-0 z-[11] flex items-center justify-center px-5">
                <div className="w-full mt-14">
                    <BotTop>
                        <h2 className="text-white font-primary text-center italic font-medium text-shadow">LEAGUE</h2>
                    </BotTop>

                    <BotTop>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-primary text-white italic text-center font-bold text-shadow">
                            THE STORY
                        </h1>
                    </BotTop>

                    {/* <svg viewBox="0 0 100 100" className="w-16">
                        <path className="road-svg" d="M59.84,7.78,50,17.63,45.57,13.2,40.16,7.78a46.63,46.63,0,1,0,19.68,0Zm-12,12L50,22l2.2-2.19,4.67-4.67a38.86,38.86,0,1,1-13.74,0ZM50,96.89A43.52,43.52,0,0,1,39.18,11.21l2.59,2.59a40.42,40.42,0,1,0,16.46,0l2.59-2.59A43.52,43.52,0,0,1,50,96.89Z">
                        </path>
                        <path d="M55.44,5.44,50,10.88,44.56,5.44,50,0Z" className="road-svg">
                        </path>
                    </svg> */}

                    <div className="w-full border-[1px] border-white/50 p-10 text-white flex flex-col gap-y-7 mt-10 relative sm:text-base text-sm">
                        <p className="font-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <p className="font-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <div className="w-full border-[1px] border-white/10 h-full absolute top-3 left-3 sm:block hidden"></div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default About;