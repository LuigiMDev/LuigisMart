import SmartphoneList from "./smartphoneList"



const Shop = () => {

  return (
    <section>
      <h2 className="inline-block text-gray3 text-xl font-medium after:content[] after:block after:w-full after:h-1 after:bg-blue after:rounded-sm after:mt-2 mb-10">Faça o melhor negócio em <span className="text-blue">Smartphones</span></h2>
      <SmartphoneList />
    </section>
  )
}

export default Shop