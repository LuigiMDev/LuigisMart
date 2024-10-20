import { Categories } from "./CategoriesObject"


const CategoriesList = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 gap-5 justify-items-center justify-center m-auto mb-20">
        {Categories.map((categorie, index) => (
            <div className="w-full h-full flex flex-col items-center" key={index}>
                <div className="relative p-[15%] mb-3 border-solid border-gray1 border-[1px] rounded-[50%] hover:border-blue cursor-pointer hover:shadow-xl transition-all">
                    <img className="w-full mx-auto" src={categorie.image} alt={`${index}`} />
                </div>
                <p>{categorie.name}</p>
            </div>
        ))}
    </div>
  )
}

export default CategoriesList