import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';
import styles from '../styles/styles.module.scss';

const About = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row min-h-screen h-full'>
                <div className={`flex-1 bg-cover bg-center min-h-96 ${styles.bgAbout}`}></div>
                <div className='flex flex-col justify-center items-center flex-1 bg-orange-50 '>
                    <h1 className='text-6xl py-10 text-center text-primary-red-light font-bebas font-extrabold'>Sobre Nosotros</h1>
                    <div className='p-10 text-base text-justify px-20 text-orange-light"'>
                        <p>
                            En De Gatos y Perros, somos un ecommerce apasionado por ofrecer lo mejor para tus mascotas. Nos especializamos en la venta de
                            productos de alta calidad para gatos y perros, con un catálogo cuidadosamente organizado en diversas categorías y subcategorías que
                            incluyen alimentos, accesorios, juguetes y productos de cuidado. Nuestro objetivo es brindarte una selección única y variada de
                            artículos que satisfagan las necesidades específicas de tus amigos peludos.
                        </p>
                        <br />
                        <p>
                            Con un enfoque en la excelencia y la innovación, hemos diseñado nuestra tienda online utilizando las últimas tecnologías para
                            garantizar una experiencia de compra intuitiva y personalizada. Ya seas un amante de los gatos o los perros, aquí encontrarás todo
                            lo que necesitas para consentir y cuidar a tus mascotas.
                        </p>
                        <br />
                        <div className='flex flex-row items-center justify-center space-x-4 pt-20'>
                            <Image src={Paw} alt='Logo' height={24} width={24} />
                            <p className='text-center text-xl font-bebas font-semibold text-primary-red-light'>
                                En De Gatos y Perros, tu satisfacción y la de tus compañeros de cuatro patas son nuestra prioridad.
                            </p>
                            <Image src={Paw} alt='Logo' height={24} width={24} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
