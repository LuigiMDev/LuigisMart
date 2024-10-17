import { useEffect, useState } from "react";
import crianca from "../../assets/FeaturedBanner/crianca.png";
import fellTheTech from "../../assets/FeaturedBanner/feelthetech.png";
import flashSale from "../../assets/FeaturedBanner/flashSale.png";
import gloss from "../../assets/FeaturedBanner/gloss.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  const banners = [crianca, fellTheTech, flashSale, gloss];

  const [imageIndex, setImageIndex] = useState(0);

  const handleClickRight = () => {
    if (imageIndex === banners.length - 1) {
        return setImageIndex(0)
    }
    return setImageIndex(imageIndex + 1)
  }

  const handleClickLeft = () => {
    if (imageIndex === 0) {
        return setImageIndex(banners.length - 1)
    }
    return setImageIndex(imageIndex - 1)
  }

useEffect(() => {
    const timer = setTimeout(handleClickRight, 5000)

    return () => clearTimeout(timer)
  })

  return (
    <section className="flex justify-center w-full select-none">
      <div className="relative flex items-center" style={{maxWidth: 1200, width: "100%", height: 400}}>
        <div className="w-full h-full flex overflow-hidden">
            {banners.map((url) => (
                    <img key={url} className="object-cover rounded-xl w-full h-full transition-all duration-300" src={url} alt="banner"style={{translate: `${-100 * imageIndex}%`}} />
            ))}
        </div>
        <div className="absolute bg-gray1 rounded-full left-0 -translate-x-1/2 cursor-pointer hover:scale-105 transition-all" style={{padding: "2.5%"}} onClick={handleClickLeft}>
            <KeyboardArrowDownIcon className="rotate-90 text-blue h-full" />
        </div>
        <div className="absolute bg-gray1 rounded-full right-0 translate-x-1/2 cursor-pointer hover:scale-105 transition-all" style={{padding: "2.5%"}} onClick={handleClickRight}>
            <KeyboardArrowDownIcon className="-rotate-90 h-full text-blue" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
