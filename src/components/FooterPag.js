import React from "react";
import "./FooterPag.css";
import book from "../img/Group 90.png";
import ubi from "../img/ubi.png";
import tel from "../img/tel.png";
import email from "../img/email.png";


export function FooterPag() {


  return (
    <>
      <div className="footerp">
        <div class="footer-content">
        <a href="/" className="logoFooter">
          <svg width="169" height="14" viewBox="0 0 169 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M165.103 0.767578V9.78271L152.947 0.767578H151.028C150.679 0.767578 150.446 1.05839 150.446 1.3492V13.7377H154.343V4.66444L166.499 13.7377H168.36C168.709 13.7377 169 13.4469 169 13.098V0.767578H165.103Z" fill="white" />
            <path d="M4.28456 0.709412H0.387695V13.6796H4.28456V0.709412Z" fill="white" />
            <path d="M38.7754 3.0359H52.9669C52.9669 1.75633 51.92 0.709412 50.6404 0.709412H36.7397C35.402 0.709412 34.2969 1.81449 34.2969 3.15222V11.2949C34.2969 12.6327 35.402 13.7377 36.7397 13.7377H50.6404C51.92 13.7377 52.9669 12.6908 52.9669 11.4112H38.7754C38.4264 11.4112 38.1937 11.1204 38.1937 10.8296V3.67568C38.1356 3.32671 38.4264 3.0359 38.7754 3.0359Z" fill="white" />
            <path d="M76.0567 11.5276H62.9121C62.5631 11.5276 62.3305 11.2368 62.3305 10.946V8.21238C62.3305 7.8634 62.6213 7.63076 62.9121 7.63076H70.3568V5.42059H58.4336V13.7378H76.0567V11.5276Z" fill="white" />
            <path d="M76.2334 2.92775V0.71759L58.4358 0.71759V2.92775L76.2334 2.92775Z" fill="white" />
            <path d="M96.3566 0.709412H79.1406V2.91957H85.2477C85.5966 2.91957 85.8293 3.21038 85.8293 3.50119V13.7377H89.7261V3.50119C89.7261 3.15222 90.0169 2.91957 90.3078 2.91957H96.4148V0.709412H96.3566Z" fill="white" />
            <path d="M118.863 8.61946C120.026 8.61946 121.015 7.68887 121.015 6.46746V2.86141C121.015 1.69817 120.084 0.709412 118.863 0.709412H102.578V2.91957H116.595C116.944 2.91957 117.176 3.21038 117.176 3.50119V5.76952C117.176 6.11849 116.886 6.35114 116.595 6.35114H102.52V13.6796H106.416V8.61946H112.349L117.118 13.7377H121.015L116.246 8.61946H118.863Z" fill="white" />
            <path d="M26.0381 0.709412L19.3495 7.92152L12.6026 0.709412H10.6251C10.2762 0.709412 9.98535 1.00022 9.98535 1.3492V13.7377H13.8822V6.29298L19.2913 12.1092L24.7004 6.29298V13.6796V13.7377H28.5972V1.3492C28.5972 1.00022 28.3064 0.767574 28.0156 0.767574H26.0381V0.709412Z" fill="white" />
            <path d="M142.536 0.767578H128.694C127.356 0.767578 126.251 1.87266 126.251 3.21039V11.3531C126.251 12.6908 127.356 13.7959 128.694 13.7959H142.536C143.874 13.7959 144.979 12.6908 144.979 11.3531V3.21039C144.979 1.8145 143.874 0.767578 142.536 0.767578ZM141.082 10.8296C141.082 11.1786 140.792 11.4113 140.501 11.4113H134.917H130.729C130.38 11.4113 130.148 11.1204 130.148 10.8296V3.67569C130.148 3.32671 130.439 3.09406 130.729 3.09406H136.313H140.501C140.85 3.09406 141.082 3.38488 141.082 3.67569V10.8296Z" fill="white" />
          </svg>

        </a>
          <div class="footer-menu">
            <ul className="conte">
              <li><a href=""><img className="icons" src={tel} /> +51 994 013 327</a></li>
              <li><a href=""><img className="icons" src={ubi} /> Calle La Colonia Nro. 116, Rimac </a></li>
              <li><a href=""><img className="icons" src={email} /> ventas@imcetron.com.pe </a></li>
            </ul>

          </div>


          <div class="socials">
            <ul className="boo">
              <li><a href="/Book"><img className="icons" src={book} /> Libro de Reclamos</a></li>
            </ul>

          </div>

        </div>

        <div class="footer-bottom">
          <p><a href="#">Imcetron </a> &copy; {new Date().getFullYear()} | Todos los Derechos Reservados</p>
        </div>
      </div>

    </>

  );
}