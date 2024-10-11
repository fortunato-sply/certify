import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import ReviewSlider, { Review } from "./components/review-slider/reviewSlider";

const TestimonialsSection = () => {
    const reviews: Review[] = [
        {
            author: 'Lucas Fortunato',
            company: 'Top Cursos',
            description: 'Facilitou minha operação. Não me preocupo mais com certificados de alunos.',
            image: ''
        },
        {
            author: 'Lucas Fortunato',
            company: 'Top Cursos',
            description: 'Facilitou minha operação. Não me preocupo mais com certificados de alunos.',
            image: ''
        }
    ]

    return (
        <section className="w-full h-screen flex flex-col items-center pt-8">
            <motion.div 
                className="flex flex-col items-center gap-0"
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .1, ease: "easeInOut" }}
            >
                <h2 className="font-bold sm:text-3xl text-2xl text-center">O que nossos clientes dizem</h2>
            </motion.div>

            <motion.div 
                className="flex flex-col items-center mt-8 bg-green-500 w-full"
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: .1, ease: "easeInOut" }}
            >
                <ReviewSlider reviews={reviews} />
            </motion.div>
        </section>
    )
}

export default TestimonialsSection;