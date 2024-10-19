import DropdownItems from "../Dropdown/DropdownItems"
import { DropdownList } from "../Dropdown/DropdownList"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

type SanduicheMenuProp = {
    clickSanduiche: boolean;
    handleClickSanduich(): void
}

const index: React.FC<SanduicheMenuProp> = ({clickSanduiche, handleClickSanduich}) => {


  return (
    <nav className="flex flex-col fixed z-20 top-0 h-screen overflow-y-auto overflow-x-hidden bg-white w-[50vw] transition-all" style={{left: clickSanduiche ? "50%" : "100%"}}>
        <div className="w-full h-full relative flex flex-col">
            <FormatListBulletedIcon className="text-blue  cursor-pointer absolute right-2 top-0 z-10" sx={{fontSize: "3rem"}} onClick={handleClickSanduich}/>
            <ul className="w-full h-full p-10">
                {DropdownList.map((item, index) => (
                    <DropdownItems key={index} name={item.name} items={item.items} />
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default index