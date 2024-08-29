import Link from "next/link";
import Image from "next/image";
import Facebook from '../components/icon/icons/facebook.svg';
import Instagram from '../components/icon/icons/ig.svg';
import  Youtube  from "../components/icon/icons/youtube.svg";

const ContactSocialMedia = () => {
  return (
    <div className="flex flex-row items-center lg:space-x-4 lg:mr-4">
        <Link className=" bg-primary-red-light rounded-full p-2" href="https://www.facebook.com/">
            <Image src={Facebook} alt="Facebook Tienda" height={34} width={34}/>
        </Link>
        <Link className="mx-2 bg-primary-red-light rounded-full p-2" href="https://www.instagram.com/">
            <Image src={Instagram} alt="Instagram Tienda" height={34} width={34}/>
        </Link>
        <Link className=" bg-primary-red-light rounded-full p-2" href="https://www.youtube.com/">
            <Image src={Youtube} alt="Youtube Tienda" height={36} width={36}/>
        </Link>
    </div>
  )
}

export default ContactSocialMedia



