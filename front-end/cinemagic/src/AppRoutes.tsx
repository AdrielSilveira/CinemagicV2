import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import FormGender from "./pages/FormGender/FormGender";
import Login from "./pages/Login/Login";
import Filmes from "./pages/Cadastro/Filmes";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/Filmes" element={<Filmes/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/FormGender" element={<FormGender />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </Router>
  )
}
