import { Smartphones } from "./SmatphoneObject";


const SmartphoneList = () => {


  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center m-auto mb-10"
      
    >
      {Smartphones.map((smartphone, index) => (
        <div
          className="relative p-3 w-full border-solid border-gray1 border-[1px] rounded-xl hover:border-blue cursor-pointer hover:shadow-xl transition-all"
          key={index}
        >
          <img className="w-5/12 mx-auto" src={smartphone.image} alt={`${index}`} />
          <div>
            <p className="text-[120%] mt-5">{smartphone.name}</p>
            <p>R${smartphone.price.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          </div>
          <div className="absolute top-0 right-0 bg-blue rounded-bl-xl rounded-tr-xl p-2">
            <p className="text-white">56% <br /> OFF</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmartphoneList;
