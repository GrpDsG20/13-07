import React from "react";
import ContactFondo from "../FondoContact";
import Mapa from '../../img/mapa ref.png'
import Formulario from "../Formulario";
import './contacto.css';
import NavBar from "../NavBar";

export const Contacto = () => {
  return (
    <>
      <NavBar />
      <div className="container-carrusel">
        <ContactFondo />
      </div>

      <div className="Maps">
        <div className='img-mapa'>
          <img
            className="d-block w-100"
            src={Mapa}
            alt="Imcetron"
          />
        </div>
      </div>
      <div className="formularioC">
        <div className="tituloC">
          <h2>¿Necesitas más información?</h2>
          <p>Completa el formulario y escríbenos para solicitar mayor información sobre nuestros productos.</p>
        </div>
        <Formulario />
      </div>
      <a href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </>
  );
};