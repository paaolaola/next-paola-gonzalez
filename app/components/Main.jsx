'use client';

import Image from "next/image"
import Perro from "../../public/images/ofertasperro.jpg"
import Gato  from "../../public/images/ofertasgato.jpg"
import Ofertas  from "../../public/images/ofertas.jpg"
import Comedero   from "../../public/images/comedero.png"
import Ropa   from "../../public/images/ropa.png"
import Cama  from "../../public/images/cama.png"
import Collar  from "../../public/images/collar.png"
import Alimento from "../../public/images/alimento.jpg"
import Bolsas from "../../public/images/bolsas.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Main = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-center  bg-gray-200 gap-6 py-6'>
        <div className='w-[400px] md:w-[600px] px-8 lg:px-0 relative z-10 '>
          <Swiper
            style={{
              '--swiper-navigation-color': '#e89005',
              '--swiper-pagination-color': '#e89005',
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={Alimento} alt="Alimento" className="z-50 flex rounded-3xl object-cover  lg:h-100" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Alimento} alt="Alimento" className="z-50 flex rounded-3xl object-cover  lg:h-100 "/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Alimento} alt="Alimento" className="z-50 flex rounded-3xl object-cover  lg:h-100 "/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=' px-4'>
          <Image src={Bolsas} alt="Bolsas" className="my-4 rounded-3xl object-cover lg:h-80 lg:w-80" />
        </div>
      </div>
      
    <div className='flex flex-col lg:flex-row items-center justify-evenly px-4 lg:px-8 bg-grey-light py-10'>
  {[
    { src: Comedero, title: "Platos y Bebederos", ofert: "Ofertas destacadas", desc: "-10%" },
    { src: Ropa, title: "Vestuario", ofert: "Ofertas destacadas", desc: "-20%" },
    { src: Cama, title: "Camas", ofert: "Variedades y descuentos", desc: "-30%" },
    { src: Collar, title: "Correas y Arneses", ofert: "Ofertas destacadas", desc: "-40%" }
  ].map((item, index) => (
    <div key={index} className="font-bebas text-primary-red text-center w-full lg:w-auto mb-6 lg:mb-0">
      <div className="relative mx-auto w-60 ">
        <span className="bg-primary-red-light rounded-full p-4 text-grey-light absolute top-2 left-2 sm:top-2 sm:left-1 lg:left-2 z-10">{item.desc}</span>
        <Image src={item.src} alt={item.title} className="my-4 mx-auto" width={280} height={360} />
      </div>
      <h1 className="font-extrabold text-3xl font-pacifico">{item.title}</h1>
      <p className="text-xl my-4">{item.ofert}</p>
    </div>
  ))}
</div>
      
      <div className='flex flex-col lg:flex-row items-center justify-center gap-6 bg-gray-200 px-4 lg:px-8 py-10'>
    <div className="lg:w-1/3">
        <Image src={Perro} alt="Ofertas para perros" className="rounded-3xl object-cover lg:h-60" />
    </div>
    <div>
        <Image src={Gato} alt="Ofertas para gatos" className="rounded-3xl  lg:w-48 lg:h-60" />
    </div>
    <div className="lg:w-1/3">
        <Image src={Ofertas} alt="Ofertas especiales" className="rounded-3xl object-cover  lg:h-100" />
    </div>
</div>
    </>
  )
}

export default Main;
