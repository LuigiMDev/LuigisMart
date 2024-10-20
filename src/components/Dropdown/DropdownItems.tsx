import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DropdownStyles } from "./DropdownStyles";

type DropdownItemsProps = {
  name: string;
  items: string[];
  activeID: string | null;
  handleClick: (id:string) => void;
};

const DropdownItems: React.FC<DropdownItemsProps> = ({ name, items , activeID, handleClick}) => {

  return (
    <li className="relative">
      <button
        className="py-2 px-3 rounded-3xl text-left text-white font-normal text-base hover:opacity-90 transition-all"
        style={DropdownStyles.btn(name, activeID)}
        onClick={() => handleClick(name)}
      >
        {name}
          <KeyboardArrowDownIcon className="transition-transform duration-300" style={DropdownStyles.arrow(name, activeID)} />
      </button>
      <div
        className="transition-all ease-in-out duration-300 block lg:absolute w-full bg-gray1 rounded-lg z-10 overflow-hidden"
        style={DropdownStyles.div(name, activeID)}
      >
        <ul className="flex flex-col items-center gap-2 py-2 px-1">
          {items.map((item) => {
            return <li key={item} className="cursor-pointer scale-95 hover:scale-100 transition-transform duration-300 text-center">{item}</li>
          })}
        </ul>
      </div>
    </li>
  );
};

export default DropdownItems;
