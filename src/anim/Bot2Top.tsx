import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";

interface children {
    children: JSX.Element
    delay?: number | undefined
}

const BotTop: FunctionComponent<children> = ({ children, delay }) => {

    const settings = { triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` }

    const [ref, inView] = useInView(settings)

    return (
        <div className="overflow-hidden"  ref={ref}>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { y: [70, 0], opacity: 1 } : {}} transition={{ duration: 1.3, ease: [0.16, 0.77, 0.47, .97], delay: delay ? delay : 0 }}>
                {children}
            </motion.div>
        </div>

    );
}

export default BotTop;