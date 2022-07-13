import React from "react";
import EmpresaFondo from "../FondoEmpresa";
import NavBar from "../NavBar";


export const Empresa = () => {
  return (
    <>
      <NavBar />
      <div className="container-empresa">
        <EmpresaFondo />
      </div>
      <a href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </>
  );
};