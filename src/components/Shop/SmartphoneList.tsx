import { Smartphones } from "./SmatphoneObject";


const SmartphoneList = () => {


  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center m-auto"
      style={{ maxWidth: 1200 }}
    >
      {Smartphones.map((smartphone, index) => (
        <div
          className=" p-3 border-solid border-blue border-2 rounded-xl"
          style={{ width: "100%" }}
          key={index}
        >
          <img className="h-2/4 m-auto" src={smartphone.image} alt={`${index}`} />
        </div>
      ))}
    </div>
  );
};

export default SmartphoneList;
