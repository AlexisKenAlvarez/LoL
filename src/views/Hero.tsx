import MainVideo from '../../videos/backgroundvideo.mp4'
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';

const Hero = () => {

    const handleLoaded = () => { }

    const [scrolled, setScrolled] = useState<boolean>(false);

    const scrollHandler = () => {
        if (window.scrollY > 37) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);


    return (
        <section className={`w-full min-h-screen bg-bg h-auto relative flex items-center justify-center z-10 px-5 transition-all ease-in-out duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-[90%] h-[80vh] z-10 fixed">
                <video
                    src={MainVideo}
                    autoPlay
                    muted
                    playsInline
                    loop
                    onLoadedData={handleLoaded}
                    className="w-full h-full object-cover absolute top-0 left-0 brightness-[80%]"
                />

                <div className="w-full h-full border-[1px] border-white/50 absolute sm:top-5 top-3 sm:left-5 left-3"></div>

                <div className="relative z-10 flex items-center justify-center w-full h-full px-5">
                    <div className="">
                        <h1 className={`font-primary text-5xl sm:text-8xl font-bold text-white text-center text-shadow transition ease-in-out duration-[0.5s] ${scrolled ? '-translate-y-full' : ''}`}>LEAGUE OF LEGENDS</h1>
                        <div className={`flex items-center w-fit mx-auto mt-3 gap-x-7 gap-y-3 sm:flex-row flex-col delay-75 transition ease-in-out duration-[0.5s] ${scrolled ? '-translate-y-full' : ''}`}>
                            <Button variant="mocha">
                                GET STARTED
                            </Button>

                            <Button variant="cyan">
                                BUY TOKEN
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            <video
                src={MainVideo}
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover fixed top-0 left-0 blur-md"

            />
        </section>
    );
}

export default Hero;