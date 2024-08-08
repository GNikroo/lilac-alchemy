import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import appStyles from "../App.module.css";

function Home() {
  return (
    <Container>
      <div className="container-fluid">
        <h1>
          Welcome to <span className={appStyles.Title}>Lilac Alchemy</span>
        </h1>
        <p>
          Discover our range of natural, handmade salves crafted with love and
          care.
        </p>
        <div className="text-center">
          <a href="/products" className={`${styles.Button} mt-3`}>
            read more
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Home;
