import React from "react";
import "./styles/Card.css";
import purchase from "./icon-cart.png";
/*** 
 * EXTRACTED TEXT
   GABRIELLE
CHANEL
PERFUME
Gabrielle
Essence Eau
De Parfum
A floral, solar and voluptuous
interpretation composed by
Olivier Polge, Perfumer-Creator
for the House of CHANEL.
$149.99 $169.99
Add to Cart ***/

function Card() {
  return (
    <div className="CardContainer">
      <div className="left"></div>
      {/* _____________________ */}
      <div className="right">
        <div className="right-stuff">
          <h1 className="title">PERFUME</h1>
          <h1 className="header-text">Gabrielle Essence Eau De Parfum</h1>
          <p className="paragraph">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price-section">
            <h1> $149.99 </h1>
            <h4> $169.99 </h4>
          </div>
          <div className="purchase-section">
            <img src={purchase} className="purchase" alt="on error " />
            <button className="btn"> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
