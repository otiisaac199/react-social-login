import { Link } from "react-router-dom";
// import { LogoImg } from "../../utils";

type NavbarProps = {
  user: {
    displayName: string;
    photos: { value: string }[];
  } | null;
};

const Navbar = ({ user }: NavbarProps) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
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
              src={user.photos[0].value}
              alt=""
            />
          </li>
          <li>{user.displayName}</li>
          <li className="ml-6 cursor-pointer" onClick={logout}>
            Logout
          </li>
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
