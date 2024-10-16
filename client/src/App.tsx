import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  // typeof "Access-Control-Allow-Credentials" == string | Boolean;

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          // "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/post/:id"
          element={user ? <Posts /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
