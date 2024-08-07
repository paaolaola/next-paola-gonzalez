import Image from "next/image"
import Perro from "../../public/images/ofertasperro.jpg"
import Gato  from "../../public/images/ofertasgato.jpg"
import Ofertas  from "../../public/images/ofertas.jpg"
import Comedero   from "../../public/images/comedero.jpg"
import Ropa   from "../../public/images/ropa.jpg"

const Main = () => {
  return (
    <>
    <div className='flex items-center flex-row justify-evenly px-8 bg-grey-light h-[100vh]'>
      <div className="font-bebas text-primary-red text-center">
          <Image src={Comedero} alt="Comedero" width={280} height={360} className="my-4"/>
          <h1 className="font-extrabold text-3xl font-pacifico">Platos y Bebederos</h1>
          <p className="text-xl my-4">Ofertas destacadas</p>
          </div>
          <div className="font-bebas text-primary-red text-center">
          <Image src={Ropa} alt="Ropa" width={280} height={360} className="my-4"/>
          <h1 className="font-extrabold text-3xl font-pacifico">Vestuario</h1>
          <p className="text-xl my-4">Ofertas destacadas</p>
          </div>
          <div className="font-bebas text-primary-red text-center">
          <Image src={Ropa} alt="Ropa" width={280} height={360} className="my-4"/>
          <h1 className="font-extrabold text-3xl font-pacifico">Comederos</h1>
          <p className="text-xl my-4">Ofertas destacadas</p>
          </div>
          <div className="font-bebas text-primary-red text-center">
            <Image src={Ropa} alt="Ropa" width={280} height={360} className="my-4"/>
            <h1 className="font-extrabold text-3xl font-pacifico">Comederos</h1>
            <p className="text-xl my-4">Ofertas destacadas</p>
          </div>
    </div>
    <div className='flex items-center flex-row justify-center gap-3 bg-gray-200 h-[60vh]'>
    <Image src={Perro} alt="Ofertas para perros" width={360} height={360} className="rounded-3xl"/>
      <Image src={Gato} alt="Ofertas para gatos" width={210} height={260} className="rounded-3xl"/>
      <Image src={Ofertas} alt="Ofertas para gatos" width={650} height={360} className="rounded-3xl"/>
    </div>
    </>
  )
}

export default Main