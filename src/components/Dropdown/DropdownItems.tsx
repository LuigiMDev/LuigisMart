import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DropdownStyles } from "./DropdownStyles";

type DropdownItemsProps = {
  name: string;
  items: string[];
};

const DropdownItems: React.FC<DropdownItemsProps> = ({ name, items }) => {
  const [activeID, setActiveID] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveID(activeID === id ? null : id);
  };

  return (
    <li className="relative">
      <button
        className="py-2 px-5 rounded-3xl text-white font-normal hover:opacity-90 transition-all"
        style={DropdownStyles.btn(name, activeID)}
        onClick={() => handleClick(name)}
      >
        {name}
          <KeyboardArrowDownIcon className="transition-transform duration-300" style={DropdownStyles.arrow(name, activeID)} />
      </button>
      <div
        className="transition-all absolute w-full bg-gray1 rounded-lg z-10"
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
