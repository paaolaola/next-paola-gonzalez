import "../../styles/styles.module.scss";
import SocialMediaBtn from "../SocialMediaBtn";

const TopBar = () => {
  return (
    <div className="flex flex-row bg-primary-red text-gray-200 font-bebas text-base px-10 py-2 justify-between items-center">
        <h1>
            DESPACHO A TODO CHILE. ENVÍO GRATIS POR COMPRAS SOBRE $30.000
        </h1>
<div>
    <SocialMediaBtn />
</div>
    </div>
  )
}

export default TopBar;