//importamos
import CardBeer from "../CardBeer/CardBeer";
import dataBeer from "../../dataBeer";
import './BeerFlex.css'
// Importamos Swiper react components (El control deslizante táctil móvil más moderno)
import { Swiper, SwiperSlide } from 'swiper/react';

// Importamos solo los módulos de Swiper que se utilizan
import { Navigation } from 'swiper/modules';


//Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';


function BeerFlex() {
    const configSwiper = {
      className: 'estilo-swiper',
      modules: [Navigation],
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      onSlideChange: () => console.log('slide change'),
      onSwiper: (swiper) => console.log(swiper),
      breakpoints: {
        678: {
          slidesPerView: 2,
          spaceBetween: 2,
          centeredSlides: true,

        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
    };
    return (
        <div className="beerFlex">
            <h1 className="producto-titulo">PRODUCTOS <em>Descubre el sabor auténtico</em></h1>
            <Swiper {...configSwiper} >
                {dataBeer.map((datos, index) => (
                    <SwiperSlide key={index}>
                        <CardBeer
                            imagen={datos.imagen}
                            nombre={datos.nombre}
                            color={datos.color}
                            descripcion={datos.descripcion}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
}

export default BeerFlex;
