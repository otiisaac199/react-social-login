import { Link } from "react-router-dom";
import { LogoImg } from "../../utils";

type NavbarProps = {
  user: boolean;
};

const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className="flex justify-around items-center bg-bg-col text-white h-[50px]">
      <span className="text-[20px] font-[500]">
        <Link to="/">Social App</Link>
      </span>
      {user ? (
        <ul className="flex items-center font-[500] text-[18px]">
          <li className="mr-1">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={LogoImg}
              alt=""
            />
          </li>
          <li>John Doe</li>
          <li className="ml-6">Logout</li>
        </ul>
      ) : (
        <Link to="login" className="font-bold">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
