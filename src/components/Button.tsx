import { FunctionComponent, ReactNode } from "react"



interface ButtonProps {
    children: ReactNode,
    variant: 'cyan' | 'mocha',
    className?: string,
    onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ children, variant, className, onClick }) => {
    return (

        <button className={`w-auto px-10 sm:px-16 h-10 sm:h-12 relative  font-bold items-center justify-center group ${className}`} onClick={onClick}>
            <img src={`/buttons/${variant === 'cyan' ? 'cyan' : 'mocha'}.png`} alt={`${variant === 'cyan' ? 'cyan' : 'mocha'}`} className="w-full h-full absolute top-0 left-0" />
            <img src={`/buttons/${variant === 'cyan' ? 'cyan' : 'mocha'}-hover.png`} alt={`${variant === 'cyan' ? 'cyan' : 'mocha'}`} className="w-full h-full absolute opacity-0 left-0 top-0 group-hover:opacity-100 transition-all ease-in-out duration-300" />

            <h1 className="font-secondary relative z-10 text-bl text-[12px] text-white transition-color ease-in-out duration-300">
                {children}
            </h1>
        </button>

    )
}