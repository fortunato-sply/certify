import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import { useSwipeable } from 'react-swipeable';

// Definindo o tipo do review
export interface Review {
  image: string,
  author: string,
  company: string,
  description: string
}

// Definindo as props do componente
interface ReviewSliderProps {
  reviews: Review[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }: ReviewSliderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar se é um dispositivo móvel
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Definir o estado inicial
    setIsMobile(mediaQuery.matches);

    // Adicionar o ouvinte para mudanças
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remover o ouvinte quando o componente desmontar
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Configurações do slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isMobile, // Só habilita autoplay se não for mobile
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          dots: true,
          autoplay: false, // No autoplay on mobile
          swipeToSlide: true,
        },
      },
    ],
  };

  // Usando useRef para o slider
  const sliderRef = useRef<Slider>(null);

  // Hook para o swipe no celular
  const handlers = useSwipeable({
    onSwipedLeft: () => sliderRef.current?.slickNext(),
    onSwipedRight: () => sliderRef.current?.slickPrev(),
  });

  return (
    <div {...handlers}>
      <Slider {...sliderSettings} ref={sliderRef}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div style={{ padding: '20px', background: '#fff', borderRadius: '10px' }}>
              <h3>{review.author}</h3>
              <p>{review.company}</p>
              <strong>{review.description}</strong>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;