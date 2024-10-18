import galaxyS22i from "../../assets/Smartphones/galaxyS22.jpg";
import iphone13i from "../../assets/Smartphones/iphone13.jpg";
import iphone16i from "../../assets/Smartphones/iphone16ProMax.webp";
import m13i from "../../assets/Smartphones/m13.webp";
import zFoldi from "../../assets/Smartphones/zFold.jpg";

type Tsmartphone = {
  name: string;
  image: string;
  price: number;
};

export const Smartphones: Tsmartphone[] = [
    {
        name: "Galaxy S22",
        image: galaxyS22i,
        price: 6999
    },
    {
        name: "Iphone 13 Pro Max",
        image: iphone13i,
        price: 3788
    },
    {
        name: "Iphone 16 Pro Max",
        image: iphone16i,
        price: 8189
    },
    {
        name: "Galaxy M13",
        image: m13i,
        price: 1499
    },
    {
        name: "Galaxy Z Fold5",
        image: zFoldi,
        price: 6599
    }
]

