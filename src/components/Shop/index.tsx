import { useEffect, useState } from "react"
import { smartphoneHome } from "../../API/request"
import { Products } from "../../Types/Smartphone";

const Shop = () => {

  const [smartphoneList, setSmartPhoneList] = useState<Products[]>([]);


  useEffect(() => {
      smartphoneHome()
      .then((data) => setSmartPhoneList(data.products))
  },[])

  return (
    <section>
      <h2 className="inline-block text-gray3 text-xl font-medium after:content[] after:block after:w-full after:h-1 after:bg-blue after:rounded-sm after:mt-2">Faça o melhor negócio em <span className="text-blue">Smartphones</span></h2>
      <div>
        {smartphoneList.map((smartphone) => (
          <div key={smartphone.id}>
            <img src={smartphone.thumbnail} alt="" />

          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop