// src/components/EtsyShop.js
import React from "react";
import { Container } from "react-bootstrap";

function EtsyShop() {
  return (
    <Container>
      <h2>Our Etsy Shop</h2>
      <div style={{ position: "relative", paddingBottom: "75%", height: 0 }}>
        <iframe
          src="https://www.etsy.com/shop/lilacalchemybygreco/?etsrc=sdt"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          title="Etsy Shop"
          x-frame-options="DENY"
        ></iframe>
      </div>
    </Container>
  );
}

export default EtsyShop;
