import { DailyEssentialsList } from "./DailyEssentialsList"

const DailyEssential = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 gap-5 justify-items-center justify-center m-auto">
        {DailyEssentialsList.map((categorie, index) => (
            <div className="w-full h-full flex flex-col items-center" key={index}>
                <div className="relative p-[10%] mb-3 border-solid border-gray1 border-[1px] rounded-xl hover:border-blue cursor-pointer hover:shadow-xl transition-all">
                    <img className="w-full mx-auto" src={categorie.image} alt={`${index}`} />
                </div>
                <p className="text-sm text-gray3">{categorie.name}</p>
                <p className="text-lg font-semibold opacity-90">Até 50% OFF</p>
            </div>
        ))}
    </div>
  )
}

export default DailyEssential