import CategoriesList from "./CategoriesList";
import SmartphoneList from "./SmartphoneList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Shop = () => {
  return (
    <section>
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
    </section>
  );
};

export default Shop;
