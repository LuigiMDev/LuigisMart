import DropdownItems from "./DropdownItems";
import { DropdownList } from "./DropdownList";

const Dropdown = () => {

  return (
    <nav className="mb-7 hidden lg:block">
      <ul className="flex justify-between">
       {DropdownList.map((item, index) => (
        <DropdownItems key={index} name={item.name} items={item.items} />
       ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
