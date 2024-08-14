import SocialMediaBtn from "../SocialMediaBtn";
import { Truck } from 'lucide-react';
import "../../styles/styles.module.scss";

const TopBar = () => {
  return (
    <div className="flex flex-row bg-primary-red text-gray-200 font-bebas text-base px-4 py-2 justify-between items-center">
      <div className="flex flex-row items-center space-x-4">
        <Truck className="" /> 
      <h1 className="text-start lg:text-left text-xs sm:text-base lg:ml-4">
      DESPACHO A TODO CHILE. ENVÍO GRATIS POR COMPRAS SOBRE $30.000
      </h1>
      </div>
      <div className="mt-2 lg:mt-0">
        <SocialMediaBtn />
      </div>
    </div>
  );
};

export default TopBar;
