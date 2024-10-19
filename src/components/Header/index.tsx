import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SortIcon from "@mui/icons-material/Sort";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SanduicheMenu from "../SanduichMenu";
import './header.css'

import { styles } from "../../constants/styles";
import { useState } from "react";

const Header = () => {
  const [clickSanduiche, setClickSanduiche] = useState(false);
  const handleClickSanduich = () => {
    setClickSanduiche(!clickSanduiche);
  };

  return (
    <header className="mb-7">
      <div className="hidden lg:flex justify-between mb-7">
        <p className="text-gray2 text-sm">Bem vindo ao mundo Luigi'sMart</p>
        <ul className="flex gap-3">
          <li>
            <div className="flex gap-1">
              <LocationOnIcon
                sx={{ color: styles.colors.blue, fontSize: "1.3rem" }}
              />
              <p className="text-gray2 text-sm hidden lg:inline">
                entregar para <strong>423651</strong>
              </p>
            </div>
          </li>
          <li>
            <div className="h-5" style={styles.bar}></div>
          </li>
          <li className="flex gap-1 cursor-pointer group">
            <LocalShippingIcon
              sx={{ color: styles.colors.blue, fontSize: "1.3rem" }}
            />
            <p className="transition-all text-gray2 text-sm group-hover:text-blue hidden lg:inline">
              acompanhe seu pedido
            </p>
          </li>
          <li>
            <div className="h-5" style={styles.bar}></div>
          </li>
          <li className="flex gap-1 group">
            <LocalOfferIcon
              sx={{ color: styles.colors.blue, fontSize: "1.3rem" }}
            />
            <p className="text-gray2 text-sm group-hover:text-blue cursor-pointer hidden lg:inline">
              todas as ofertas
            </p>
          </li>
        </ul>
      </div>
        <div className="lg:hidden">
          <FormatListBulletedIcon
            className="text-blue text-[10rem] cursor-pointer absolute right-0 top-0 " sx={{fontSize: "3rem"}}
            onClick={handleClickSanduich}
          />
          <SanduicheMenu
            clickSanduiche={clickSanduiche}
            handleClickSanduich={handleClickSanduich}
          />
        </div>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <a className="flex gap-4 items-center" href="#">
            <SortIcon sx={{ color: styles.colors.blue, fontSize: "2.5rem" }} />
            <h1 className="text-blue font-bold text-2xl md:text-3xl">Luigi'sMart</h1>
          </a>
        </div>
        <div className="hidden lg:inline-flex">
          <SearchIcon
            className="cursor-pointer"
            sx={{ color: styles.colors.blue }}
          />
          <input
            type="text"
            placeholder="Pesquise eletrônicos, cosméticos e mais..."
            className="outline-none w-80"
          />
        </div>
        <div className="HeaderDiv mx-5">
          <ul className="flex gap-5 items-center" style={{}}>
            <li className="inline-flex lg:hidden">
            <SearchIcon
              className="cursor-pointer"
              sx={{ color: styles.colors.blue }}
            />
            </li>
            <li className="inline-flex lg:hidden">
              <div className="h-7" style={styles.bar}></div>
            </li>
            <li className="flex items-center cursor-pointer">
              <PersonIcon
                sx={{ color: styles.colors.blue, fontSize: "1.5rem" }}
              />
              <p className="hidden lg:inline">Login/Resgistrar</p>
            </li>
            <li>
              <div className="h-7" style={styles.bar}></div>
            </li>
            <li className="flex items-center cursor-pointer">
              <ShoppingCartIcon
                sx={{ color: styles.colors.blue, fontSize: "1.5rem" }}
              />
              <p className="hidden lg:inline">Carrinho</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
