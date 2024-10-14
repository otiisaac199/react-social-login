import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {
  return (
    <div className="h-[calc(100vh-50px)] flex items-center justify-center">
      <h1 className="absolute top-[140px] text-3xl font-bold text-gray-300">
        Choose your Login Method
      </h1>
      <div className="w-[60%] h-[75%] shadow-lg flex items-center rounded-lg">
        <div className="left">
          <div className="loginButton bg-[#df4930]">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton bg-[#507cc0]">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton bg-black">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="h-[100%] flex items-center justify-center relative">
          <div className="w-[0.5px] h-[70%] bg-gray-300 absolute top-0 bottom-0 left-0 right-0 m-auto z-[-1]" />
          <div className="border border-gray-300 rounded-full p-[10px] text-gray-500 bg-white font-bold">
            OR
          </div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button
            type="submit"
            className="w-[200px] py-[12px] px-[20px] font-bold bg-bg-dark-col rounded-md text-white "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
