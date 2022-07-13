import React from "react";
import NavBar from "../NavBar";
import ServicesFondo from "../FondoServices";


export const Servicio = () => {
  return (
    <>
      <div className="container-empresa">
        <NavBar />
        <ServicesFondo />
      </div>
      <a href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </>
  );
};

