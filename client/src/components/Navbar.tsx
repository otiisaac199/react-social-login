import { LogoImg } from "../../utils";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-bg-col text-white h-[50px]">
      <span className="text-[20px] font-[500]">Social App</span>
      <ul className="flex items-center gap-3 font-[500] text-[18px]">
        <li>
          <img className="w-8 h-8 rounded-full" src={LogoImg} alt="" />
        </li>
        <li>John Doe</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
