import DropdownItems from "./DropdownItems";

const Dropdown = () => {

  return (
    <nav className="mb-7">
      <ul className="flex justify-between">
       <DropdownItems name="Mantimentos" items={["Grãos", "Massas", "Temperos", "Óleos e Gorduras", "Conservas", "Laticínios"]} />
       <DropdownItems name="Frutas Premium" items={["Frutas Cítricas", "Frutas Tropicais", "Frutas Vermelhas", "Frutas de Caroço", "Frutas Secas"]}/>
       <DropdownItems name="Casa/Cozinha" items={["Utensílios de cozinha", "Panelas", "Talheres", "Copos e canecas", "Tábua de corte", "Panos de prato", "Eletrodomésticos"]}/>
       <DropdownItems name="Moda" items={["Roupas femininas", "Roupas masculinas", "Acessórios", "Sapatos", "Jóias"]}/>
       <DropdownItems name="Eletrônicos" items={["Smartphones", "Laptops", "Fones de ouvido", "Tablets", "Câmeras", "Smart TVs"]}/>
       <DropdownItems name="Beleza" items={["Produtos para pele", "Maquiagem", "Perfumes", "Produtos para cabelo", "Acessórios de beleza"]}/>
       <DropdownItems name="Melhoria da Casa" items={["Pintura", "Ferramentas", "Materiais de construção", "Iluminação", "Decoração"]}/>
       <DropdownItems name="Sports, Brinquedos & Bagagens" items={["Equipamentos esportivos", "Brinquedos para crianças", "Mochilas", "Malas de viagem", "Acessórios esportivos"]}/>
      </ul>
    </nav>
  );
};

export default Dropdown;
