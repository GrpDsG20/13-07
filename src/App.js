import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Producto } from "./components/Pages/Producto";
import { Servicio } from "./components/Pages/Servicio";
import { Empresa } from "./components/Pages/Empresa";
import { Contacto } from "./components/Pages/Contacto";
import { Catalogo } from "./components/Catalogo/catalogo";
import { FooterPag } from "./components/FooterPag";
import { FondoBook } from "./components/Pages/Book/bookFondo";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Producto />}></Route>
          <Route path="/servicios" element={<Servicio />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/Book" element={<FondoBook />}></Route>
          <Route path="/Catalogo" element={<Catalogo />}></Route>
        </Routes>
      </Router>

      <FooterPag />

    </>
  );
}
export default App;
