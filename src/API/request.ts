import { Smartphone } from "../Types/Smartphone";

const basicFetch = "https://dummyjson.com";


export const smartphoneHome = async (): Promise<Smartphone> => {
  const response = await fetch(`${basicFetch}/products/category/smartphones?limit=5`);
  const responseJson = await response.json();
  return responseJson;
};
