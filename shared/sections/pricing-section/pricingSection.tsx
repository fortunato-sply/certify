import { title } from "@/shared/primitives";
import { motion } from "framer-motion";
import { plans, PlanType } from "./plans";
import MobilePlanSlider from "./components/mobilePlanSlider";
import { Dispatch, SetStateAction, useState } from "react";
import PlanTypeSelector from "./components/planTypeSelector";

const PricingSection = () => {
    const [selectedPlanType, setSelectedPlanType] = useState<PlanType>("annual"); 
    
    return (
        <section id='pricing' className="w-full h-screen flex items-center flex-col relative gap-4 sm:pt-0 pt-8">
            <motion.div 
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .3, ease: "easeInOut" }}
            >
                <h1 className="pt-12 font-semibold sm:text-5xl text-3xl">Encontre o <span className={title({ color: "green", fontWeight: "semibold" })}>plano ideal</span> para seu negócio</h1>
                <p className="text-gray-subtitle text-xl sm:block hidden">Automação e gestão de certificados confiável e eficiente.</p>
            </motion.div>
            <motion.div
                className="flex flex-col gap-2 flex-wrap w-full flex-1 sm:mt-12 mt-4"
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .3, ease: "easeInOut" }}
            >
                <PlanTypeSelector selectedPlanType={selectedPlanType} setSelectedPlanType={setSelectedPlanType} />
                <MobilePlanSlider plans={plans} selectedPlanType={selectedPlanType} />
            </motion.div>
        </section>
    )
}

export default PricingSection;