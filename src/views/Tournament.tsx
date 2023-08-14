import OGBotTop from "../anim/BotTop";

const Tournament = () => {

    const tournament = [
        {
            title: 'Participate in 1v1 tournaments!',
            desc: 'Show your skills in a 1v1 tournament. Win and earn rewards!',
            link: 'https://forms.gle/QkYLzWJGKDf3DyN26'
        },
        {
            title: "Participate in Summoner's Rift tournaments!",
            desc: 'Coming soon',
            link: ''
        },
        {
            title: 'Participate in ARAM tournaments!',
            desc: 'Coming soon',
            link: ''
        },

    ]

    return (
        <section className="w-full min-h-[80vh] bg-bg relative px-5 flex items-center sm:pt-0 pt-44">

            <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center h-fit">

                <h1 className="text-center font-primary text-5xl sm:text-7xl md:text-8xl font-bold text-white italic">Tournaments</h1>
                <div className="w-full mx-auto flex gap-x-10 items-center justify-center h-full mt-10 md:mt-20 xl:flex-row flex-col relative z-[11] gap-y-6">
                    {tournament.map((item, index) => {
                        return (
                            <OGBotTop  key={index}>
                                <a href={item.link} rel="noopener noreferrer" target="_blank" className="">
                                    <button className="flex max-w-[27rem] w-full h-52 relative group">
                                        <div className="w-full h-full  border-[1px] border-white/50 absolute z-10">
                                            <div className="w-10 h-10 absolute top-0 right-0 border-t-2 border-white/50 border-r-2"></div>
                                            <div className="w-10 h-10 absolute bottom-0 right-0 border-t-2 border-white/50 border-r-2 rotate-90"></div>
                                        </div>
                                        <div className="w-36 h-[90%] my-auto -ml-2 flex-shrink-0 overflow-hidden">
                                            <img src={`/tournament/${index + 1}.webp`} alt={`Image${index + 1}`}
                                                className={`h-full object-cover border-[1px] border-white/10 scale-[1.3] transition-all ease-in-out duration-500 group-hover:scale-[1]`} />
                                        </div>
                                        <div className="p-5 text-left">
                                            <h1 className="text-white font-primary text-lg font-medium leading-tight">
                                                {item.title}
                                            </h1>
                                            <p className="font-secondary text-white/50 text-sm mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </button>
                                </a>
                            </OGBotTop>


                        )
                    })}
                </div>

            </div>
        </section>
    );
}

export default Tournament;