import CategoriesList from "./Categories/CategoriesList";
import SmartphoneList from "./Smartphones/SmartphoneList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BannerShop from "../../assets/BannerShop/BannerShop.png";
import DailyEssential from "./DailyEssentials/DailyEssential";

const Shop = () => {
  return (
    <section className="mb-32">
      <section>
        <div className="flex justify-between items-center mb-10">
          <h2 className="inline-block text-gray3 text-lg md:text-xl font-medium after:content[] after:block after:w-full after:h-1 after:bg-blue after:rounded-sm after:mt-2">
            Faça o melhor negócio em{" "}
            <span className="text-blue">Smartphones</span>
          </h2>
          <div className="flex items-center cursor-pointer">
            <p className="text-sm font-medium">Veja Mais</p>
            <KeyboardArrowDownIcon className="-rotate-90 text-blue" />
          </div>
        </div>
        <SmartphoneList />
      </section>
      <section>
        <div className="flex justify-between items-center mb-10">
          <h2 className="inline-block text-gray3 text-lg md:text-xl font-medium after:content[] after:block after:w-full after:h-1 after:bg-blue after:rounded-sm after:mt-2">
            Compre por <span className="text-blue">Top Categorias</span>
          </h2>
          <div className="flex items-center cursor-pointer">
            <p className="text-sm font-medium">Veja Mais</p>
            <KeyboardArrowDownIcon className="-rotate-90 text-blue" />
          </div>
        </div>
        <CategoriesList />
      </section>
      <section className="mb-20">
        <div className="w-full h-full max-w-[1200px] max-h-[400px] rounded mx-auto">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={BannerShop}
            alt="BannerShop"
          />
        </div>
      </section>
      <section className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="inline-block text-gray3 text-lg md:text-xl font-medium after:content[] after:block after:w-full after:h-1 after:bg-blue after:rounded-sm after:mt-2">
            Essenciais{" "}
            <span className="text-blue">Diários</span>
          </h2>
          <div className="flex items-center cursor-pointer">
            <p className="text-sm font-medium">Veja Mais</p>
            <KeyboardArrowDownIcon className="-rotate-90 text-blue" />
          </div>
        </div>
        <DailyEssential />
      </section>
    </section>
  );
};

export default Shop;
