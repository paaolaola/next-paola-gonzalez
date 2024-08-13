'use client';

import Link from "next/link";
import Image from "next/image"
import {Button} from "../components/ui/button";
import Perro from "../../public/images/ofertasperro.jpg"
import Gato  from "../../public/images/ofertasgato.jpg"
import Ofertas  from "../../public/images/ofertas.jpg"
import Comedero   from "../../public/images/comedero.png"
import Ropa   from "../../public/images/ropa.png"
import Cama  from "../../public/images/cama.png"
import Collar  from "../../public/images/collar.png"
import Alimento from "../../public/images/alimento.png"
import Juguetes from "../../public/images/juguetes.png"
import Bolsas from "../../public/images/bolsas.jpg"
import Higiene from "../../public/images/higiene.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

const Main = ({product}) => {
const formatCategoryForURL = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u");

const subcategories = [
  { src: Comedero, category: "Accesorios", subcategory: "Platos", ofert: "Ofertas destacadas", desc: "-10%" },
  { src: Ropa, category: "Vestuario", subcategory: "Parkas", ofert: "Ofertas destacadas", desc: "-20%" },
  { src: Cama, category: "Comodidad", subcategory: "Camas", ofert: "Variedades y descuentos", desc: "-30%" },
  { src: Collar, category: "Transporte y seguridad", subcategory: "Correas", ofert: "Ofertas destacadas", desc: "-40%" }
];

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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href="/categories/alimentos">
              <Image src={Alimento} alt="Alimento" className="z-50 flex rounded-3xl object-cover  lg:h-100" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/categories/juguetes">
              <Image src={Juguetes} alt="Juguetes" className="z-50 flex rounded-3xl object-cover  lg:h-100 "/>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Higiene} alt="Higiene" className="z-50 flex rounded-3xl object-cover  lg:h-100 "/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='px-4 relative'>
          <Link href='/categories/salud-y-bienestar/bolsas-compostables'>
          <div className="relative">
          <Image src={Bolsas} alt='Bolsas' className='relative my-4 rounded-3xl object-cover lg:h-80 lg:w-80 ' />
          <Button className='h-10 absolute top-56 left-60 sm:top-3/4 sm:left-3/4 lg:left-52 lg:top-52 z-10' variant='transparent' >Ver más</Button>
          </div>
          </Link>
        </div>
      </div>
      
   <div className='flex flex-col lg:flex-row items-center justify-evenly px-4 lg:px-8 bg-grey-light py-10'>
      {subcategories.map((product, id) => (
        <div key={id} className="font-bebas text-primary-red text-center w-full lg:w-auto mb-6 lg:mb-0">
          <div className="relative mx-auto w-60">
            <span className="bg-primary-red-light rounded-full p-4 text-grey-light absolute top-2 left-2 sm:top-2 sm:left-1 lg:left-2 z-10">{product.desc}</span>
            <Link
              href={`/categories/${formatCategoryForURL(product.category)}/${formatCategoryForURL(product.subcategory)}`}
            >
              <Image src={product.src} alt={product.subcategory} className="my-4 mx-auto" width={280} height={360} />
            </Link>
          </div>
          <h1 className="font-extrabold text-3xl font-pacifico">{product.subcategory}</h1>
          <p className="text-xl my-4">{product.ofert}</p>
        </div>
      ))}
    </div>
      
      <div className='flex flex-col lg:flex-row items-center justify-center gap-6 bg-gray-200 px-4 lg:px-8 py-10'>
    <div className="lg:w-1/3">
    <Link href="/categories/comodidad/camas">
        <Image src={Perro} alt="Ofertas para perros" className="rounded-3xl object-cover lg:h-60" />
        </Link>
    </div>
    <div>
      <Link href="/categories/transporte-y-seguridad/correas">
        <Image src={Gato} alt="Ofertas para gatos" className="rounded-3xl  lg:w-48 lg:h-60" />
        </Link>
    </div>
    <div className="lg:w-1/3">

    <Link href="/sociosgatosyperros">
        <Image src={Ofertas} alt="Ofertas especiales" className="rounded-3xl object-cover  lg:h-100" />
        </Link>
    </div>
</div>
    </>
  )
}

export default Main;
