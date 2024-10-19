import { motion, useInView } from 'framer-motion';
import './style.css'; 
import { useRef, useState, useEffect } from 'react';

type imageDescriptionProps = {
    imagePosition: "right" | "left";
    imageSrc: string;
    title: string;
    description: string;
}

export default function ImageDescription({ imagePosition, imageSrc, title, description }: imageDescriptionProps) {
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    // Estado para controlar se a animação já foi exibida
    const [desktopHasAnimated, setDesktopHasAnimated] = useState(false);
    const [mobileHasAnimated, setMobileHasAnimated] = useState(false);

    const desktopIsInView = useInView(desktopRef);
    const mobileIsInView = useInView(mobileRef);

    // Marcar que a animação foi executada assim que entrar em visualização
    useEffect(() => {
        if (desktopIsInView && !desktopHasAnimated) {
            setDesktopHasAnimated(true);
        }
    }, [desktopIsInView, desktopHasAnimated]);

    useEffect(() => {
        if (mobileIsInView && !mobileHasAnimated) {
            setMobileHasAnimated(true);
        }
    }, [mobileIsInView, mobileHasAnimated]);

    const renderImage = () => {
        return (
            <motion.div
                ref={desktopRef}
                className='image-container sm:w-1/2 w-full hidden sm:flex'
                transition={{ duration: 0.4, delay: .3, ease: "easeInOut" }}
                initial={{ opacity: 0, translateY: '100px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                style = {{
                    opacity: desktopHasAnimated ? 1 : 0,
                    justifyContent: imagePosition === 'left' ? 'start' : 'end'
                }}
            >
                <img 
                    src={imageSrc}
                    className='c-image'
                />
            </motion.div>
        )
    }

    return (
        <div className='c-container sm:w-full w-screen px-2 sm:flex-row flex-col sm:justify-between items-center'>
            {/* Show image only in bottom if mobile */}
            <motion.div
                className='image-container sm:w-1/2 w-11/12 sm:hidden flex items-center justify-center'
                ref={mobileRef}
                style = {{
                    opacity: mobileHasAnimated ? 1 : 0,
                    transform: mobileHasAnimated ? "none" : "translateY(100px)",
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                    justifyContent: imagePosition === 'left' ? 'start' : 'end'
                }}
            >
                <img 
                    src={imageSrc}
                    className='c-image'
                />
            </motion.div>
            {imagePosition === 'left' ? renderImage() : null}
            <motion.div 
                className="text-container sm:text-left text-center sm:w-1/2 w-full"
                initial={{ opacity: 0, translateX: '-100px' }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .4, ease: "easeInOut" }}
            >
                <p 
                    className='title sm:text-5xl text-2xl'
                >
                    {title}
                </p>
                <div className='sm:w-3/4 w-full sm:text-left text-center'>
                    <p className='description font-light sm:text-xl text-base text-gray-subtitle'>{description}</p>
                </div>
            </motion.div>
            {imagePosition === 'right' ? renderImage() : null}
        </div>
    )
}