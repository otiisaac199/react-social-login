import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Login from "./pages/Login";

function App() {
  const user = true;

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
