import acessories from "../../assets/Categories/acessories.png";
import cosmetic from "../../assets/Categories/cosmetic.png";
import decor from "../../assets/Categories/decor.png";
import eletronic from "../../assets/Categories/eletronic.png";
import furniture from "../../assets/Categories/furniture.png";
import watches from "../../assets/Categories/watches.png";
import smartphone from "../../assets/Categories/smartphone.png";

type Categories = {
    name: string;
    image: string;
}

export const Categories: Categories[] = [
    {
        name: "Celular",
        image: smartphone
    },
    {
        name: "Cosméticos",
        image: cosmetic
    },
    {
        name: "Decoração",
        image: decor
    },
    {
        name: "Eletrodomésticos",
        image: eletronic
    },
    {
        name: "Mobília",
        image: furniture
    },
    {
        name: "Relógios",
        image: watches
    },
    {
        name: "Acessórios",
        image: acessories
    }
]