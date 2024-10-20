import { useState } from "react";
import DropdownItems from "./DropdownItems";
import { DropdownList } from "./DropdownList";

const Dropdown = () => {

  const [activeID, setActiveID] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveID(activeID === id ? null : id);
  };

  return (
    <nav className="mb-7 hidden lg:block">
      <ul className="flex justify-between">
       {DropdownList.map((item, index) => (
        <DropdownItems key={index} name={item.name} items={item.items} activeID={activeID} handleClick={handleClick} />
       ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
