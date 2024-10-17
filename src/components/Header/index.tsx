import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SortIcon from "@mui/icons-material/Sort";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styles } from "../../constants/styles";

const Header = () => {
  return (
    <header className="mb-7">
      <div className="flex justify-between mb-7">
        <p className="text-gray2 text-sm">Bem vindo ao mundo Luigi'sMart</p>
        <ul className="flex gap-3">
          <li>
            <div className="flex gap-1">
              <LocationOnIcon
                sx={{ color: styles.colors.blue, fontSize: "1.3rem" }}
              />
              <p className="text-gray2 text-sm">
                entregar para <strong>423651</strong>
              </p>
            </div>
          </li>
          <li>
            <div className="h-5" style={styles.bar}></div>
          </li>
          <li className="flex gap-1">
            <LocalShippingIcon
              sx={{ color: styles.colors.blue, fontSize: "1.3rem" }}
            />
            <p className="text-gray2 text-sm">acompanhe seu pedido</p>
          </li>
          <li>
            <div className="h-5" style={styles.bar}></div>
          </li>
          <li className="flex gap-1">
            <LocalOfferIcon
              sx={{ color: styles.colors.blue, fontSize: "1.3rem" }}
            />
            <p className="text-gray2 text-sm">todas as ofertas</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <SortIcon sx={{ color: styles.colors.blue, fontSize: "2.5rem" }} />
          <h1 className="text-blue font-bold text-3xl">Luigi'sMart</h1>
        </div>
        <div className="input__div">
          <SearchIcon sx={{ color: styles.colors.blue }} />
          <input
            type="text"
            placeholder="Pesquise eletrônicos, cosméticos e mais..."
            className="outline-none w-80"
          />
        </div>
        <ul className="flex gap-5 items-center">
          <li className="mr-5">
            <FormatListBulletedIcon sx={{ color: styles.colors.blue, fontSize: "1.5rem" }} />
          </li>
          <li className="flex items-center">
            <PersonIcon sx={{ color: styles.colors.blue, fontSize: "1.5rem" }} />
            <p>Login/Resgistrar</p>
          </li>
          <li>
            <div className="h-7" style={styles.bar}></div>
          </li>
          <li className="flex items-center">
            <ShoppingCartIcon sx={{ color: styles.colors.blue, fontSize: "1.5rem" }} />
            <p>Carrinho</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
