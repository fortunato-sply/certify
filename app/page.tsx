"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/shared/primitives";

import { motion } from "framer-motion";
import { Particles } from "@/shared/effects/particles";
import { Image3D } from "@/shared/effects/image3d";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import ImageDescription from "@/shared/components/image-description/imageDescription";
import PricingSection from "@/shared/sections/pricing-section/pricingSection";
import EvidenceSection from "@/shared/sections/testimonials-section/testimonialSection";
import VideoSection from "@/shared/sections/video-section/videoSection";

export default function Home() {
  return ( 
    <section className="flex flex-col items-center justify-center py-8 md:py-10 mt-28 md:mt-28 lg:mt-24">
      <Particles />
      <motion.div
        className="inline-block max-w-fit text-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: .3, ease: "easeInOut" }}
      >
        <h1 className={title({ size: "lg" })}>Foque no&nbsp;</h1>
        <h1 className={title({ size: "lg" })}><span className={title({ color: "green", size: "lg" })}>ensino</span>,</h1>
        <br />
        <h1 className={title({ size: "lg", class: "" })}>
          nós cuidamos dos
        </h1>
        <br />
        <h1 className={title({ size: "lg" })}>
          <span className={title({ color: "green", size: "lg" })}>certificados</span>.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Automatize seu processo de certificação e aumente sua produtividade
        </h2>
      </motion.div>

      <motion.div
        className="flex gap-3 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: .3, ease: "easeInOut" }}
      >
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg"
          })}
          href={siteConfig.links.certify}
        >
          Acesse a plataforma
        </Link>
      </motion.div>

      <motion.div
        className="mt-24 w-full"
        initial={{ opacity: 0, translateY: '50px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: .5, ease: "easeInOut" }}
      >
        <Image 
          className="w-full"
          src='/ALL-DEVICES.png'
        />
      </motion.div>
      
      {/* CARD */}
      <section className="w-full relative p-0 mt-2 flex flex-col items-center align-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, translateY: '50px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: .3, ease: "easeInOut" }}
        >
          <Card className="mt-24 py-4 w-full">
            <CardBody className="overflow-visible py-2 w-full">
              <motion.div className="w-full flex flex-col items-center gap-4 rounded-xl">
                <motion.img 
                  src='/favicon.svg' 
                  className="w-full max-h-20 bg-center"
                  initial={{ opacity: 0, translateY: '-50px' }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: .8, ease: "easeInOut" }}
                />

                <motion.p 
                  className="w-full md:w-3/4 lg:w-3/4 text-center flex flex-col gap-4 sm:gap-1"
                  initial={{ opacity: 0, translateY: '50px' }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: .3, ease: "easeInOut" }}
                >
                  <span className="font-bold  text-2xl md:text-4xl lg:text-4xl leading-7">Sistema automatizado, prático e seguro</span>
                  <span className="text-base md:text-lg lg:text-xl text-gray-subtitle">Documentos autênticos e personalizados para otimizar tempo em seu negócio.</span>
                </motion.p>
              </motion.div>
            </CardBody>
          </Card>
        </motion.div>
      </section>

      <div className="sm:hidden flex mt-12"></div>

      {/* MULTIPLE IMAGE AND TEXT */}
      <section className="mt-12 w-full flex items-center flex-col sm:gap-2 gap-4">
        <ImageDescription
          imagePosition="right"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/A_hand_pointing_to_a_futuristic_technology.png/640px-A_hand_pointing_to_a_futuristic_technology.png"
          title="Economize tempo evitando tarefas manuais"
          description="Os certificados são gerados e disponibilizados de forma automática para seus alunos. Simples assim."
        />
        <ImageDescription
          imagePosition="left"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/A_hand_pointing_to_a_futuristic_technology.png/640px-A_hand_pointing_to_a_futuristic_technology.png"
          title="A autenticidade é importante"
          description="Nossos certificados possuem um código de  único que garante a veracidade e credibilidade de cada um."
        />
        <ImageDescription
          imagePosition="right"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/A_hand_pointing_to_a_futuristic_technology.png/640px-A_hand_pointing_to_a_futuristic_technology.png"
          title="Customize do seu jeito"
          description="Personalize seus certificados com o logotipo e cores da sua marca, mantendo uma identidade visual única e profissional."
        />
        <ImageDescription
          imagePosition="left"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/A_hand_pointing_to_a_futuristic_technology.png/640px-A_hand_pointing_to_a_futuristic_technology.png"
          title="Acompanhe seu crescimento"
          description="O dashboard centraliza as informações mais relevantes para seu negócio."
        />
      </section>

      <VideoSection />
      
      {/* <EvidenceSection /> */}
      <PricingSection />
    </section>
  );
}
