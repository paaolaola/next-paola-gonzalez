import Link from "next/link";
import Image from "next/image";
import Facebook from '../components/icon/icons/facebook.svg';
import Instagram from '../components/icon/icons/ig.svg';
import  Youtube  from "../components/icon/icons/youtube.svg";

const SocialMediaBtn = () => {
  return (
    <div className="flex flex-row items-center lg:space-x-4 lg:mr-4">
        <Link className=" bg-orange-light rounded-full p-2" href="https://www.facebook.com/">
            <Image src={Facebook} alt="Facebook Tienda" height={14} width={14}/>
        </Link>
        <Link className="mx-2 bg-orange-light rounded-full p-2" href="https://www.instagram.com/">
            <Image src={Instagram} alt="Instagram Tienda" height={14} width={14}/>
        </Link>
        <Link className=" bg-orange-light rounded-full p-2" href="https://www.youtube.com/">
            <Image src={Youtube} alt="Youtube Tienda" height={16} width={16}/>
        </Link>
    </div>
  )
}

export default SocialMediaBtn



