import DropdownItems from "./DropdownItems";

const Dropdown = () => {

  return (
    <nav>
      <ul className="flex">
       <DropdownItems name="Doces" items={["coisas", "coisas"]} />
       <DropdownItems name="Tecnologia" items={["computador", "celular"]}/>
      </ul>
    </nav>
  );
};

export default Dropdown;
