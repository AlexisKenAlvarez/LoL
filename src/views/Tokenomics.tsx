import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { useState } from "react";
import BotTop from "../anim/Bot2Top";

const Tokenomics = () => {

    const ca = '0x00000000000000000000'

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        if (!copied) {
            setCopied(true)
            navigator.clipboard.writeText(ca)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }

    return (
        <section className="w-full min-h-screen h-auto px-5 relative bg-bg pt-[20rem] pb-44" id="tokenomics">

            <div className="bg-bg w-full h-[15rem] mg:h-[20rem] absolute -top-28 left-0 z-10 blur-3xl"></div>
            <div className="bg-bg w-full h-[15rem] mg:h-[20rem] absolute -bottom-28 left-0 z-10 blur-3xl"></div>

            <img src="/tokenomics/background.webp" alt="Background" className="w-full h-full absolute top-0 left-0 object-cover" />

            <div className="max-w-[1400px] w-full mx-auto border-[1px] border-white/50 relative z-10 p-10 pt-44 pb-28">
                <div className="mx-auto absolute top-0 left-0 right-0 -translate-y-1/2 w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem]">
                    <img src="/tokenomics/tokenicon.webp" alt="Tokenomics" className="w-full h-full object-cover scale-[0.9]" />
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, ease: "linear", duration: 80 }} className="w-full h-full absolute top-0 left-0 border-[1px] border-dashed rounded-full border-white/50"></motion.div>
                </div>
                <div className="mt-4">
                    <BotTop>
                        <h1 className="text-center font-primary text-2xl font-bold text-white italic">Token System</h1>
                    </BotTop>

                    <BotTop>
                        <h1 className="text-center font-primary text-5xl sm:text-7xl md:text-8xl font-bold text-white italic">Tokenomics</h1>
                    </BotTop>

                    <div className="mt-16 flex items-center justify-center xl:gap-16 gap-12 text-white xl:flex-row flex-col">
                        <div className=" xl:max-w-[32rem] max-w-[36rem] w-full h-52 relative py-10 flex items-center ">
                            <div className="clipped bg-black absolute top-0 left-0 w-full h-full scale-y-[-1]"></div>
                            <div className="w-full h-full absolute top-2 left-2 sm:top-3 sm:left-3 border-[1px] border-mocha/30"></div>

                            <div className="w-full relative z-10">
                                <div className="w-full flex justify-between px-10 items-center sm:flex-row flex-col">
                                    <BotTop>
                                        <h1 className="font-primary text-2xl font-bold">Total Supply</h1>
                                    </BotTop>

                                    <BotTop>
                                        <h2 className="font-secondary">1,000,000</h2>
                                    </BotTop>
                                </div>

                                <div className="w-full flex justify-between px-10 items-center mt-5 sm:flex-row flex-col">
                                    <BotTop>
                                        <h1 className="font-primary text-2xl font-bold">Buy & Sell Fee</h1>
                                    </BotTop>
                                    <BotTop>
                                        <h2 className="font-secondary">1%</h2>
                                    </BotTop>
                                </div>
                            </div>

                        </div>

                        <div className="xl:max-w-[32rem] max-w-[36rem] w-full min-h-52 relative py-10 flex items-center ">
                            <div className="clipped bg-black absolute top-0 left-0 w-full h-full scale-y-[-1]"></div>

                            <div className="w-full h-full absolute top-2 left-2 sm:top-3 sm:left-3 border-[1px] border-mocha/30"></div>

                            <div className="w-full relative z-10">
                                <div className="w-full flex justify-between px-10 items-center flex-col">
                                    <BotTop>
                                        <h1 className="font-primary text-2xl font-bold">Contract Address</h1>
                                    </BotTop>


                                    <BotTop>
                                        <h2 className="font-secondary">{ca}</h2>
                                    </BotTop>
                                    <div className="w-full flex items-center justify-center gap-x-5 mt-6 sm:flex-row flex-col gap-y-4">
                                        <BotTop>
                                            <Button variant="mocha" onClick={handleCopy}>
                                                {copied ? "Copied!" : "Copy CA"}
                                            </Button>
                                        </BotTop>

                                        <BotTop>
                                            <Button variant="mocha" className="">
                                                BUY TOKEN
                                            </Button>
                                        </BotTop>

                                    </div>

                                </div>




                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default Tokenomics;