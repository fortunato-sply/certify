"use client";

import { motion, useInView } from 'framer-motion';
import './style.css';
import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/shared/firebase/firebase';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

const VideoSection = () => {
    // const [videoUrl, setVideoUrl] = useState<string | null>(null);
    
    // useEffect(() => {
    //     // Referência ao arquivo de vídeo no Firebase Storage
    //     const videoRef = ref(storage, 'path/para/seu/video.mp4'); // Caminho para o vídeo no Firebase Storage

    //     // Obter URL de download do vídeo
    //     getDownloadURL(videoRef)
    //         .then((url) => {
    //             setVideoUrl(url); // Definir a URL do vídeo no estado
    //         })
    //         .catch((error) => {
    //             console.error('Erro ao buscar o vídeo:', error);
    //         });
    // }, []);

    return (
        <motion.section className="w-full h-90 flex bg-bg-gray items-center justify-center flex-col relative gap-4">
            <div className="bg-bg-gray w-screen h-full absolute top-0 -z-20"></div>

            <motion.div 
                className="flex flex-col items-center gap-0"
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .1, ease: "easeInOut" }}
            >
                <h2 className="font-bold sm:text-3xl text-2xl">Como funciona?</h2>
                <p className="sm:text-xl text-md text-zinc-500">Assista ao vídeo de introdução</p>
            </motion.div>

            <motion.div 
                className="w-full bg-black sm:h-5/6 h-3/4 rounded-lg"
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .4, ease: "easeInOut" }}    
            >
                <ReactPlayer url='https://www.youtube.com/watch?v=cjrN-vru2h8' width={'100%'} height={'100%'} />
            </motion.div>
        </motion.section>
    )
}

export default VideoSection;