import React from "react";
import { Container, Button } from "react-bootstrap";
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
        <Button className={styles.Button}>
          <a href="/products">read more</a>
        </Button>
      </div>
    </Container>
  );
}

export default Home;
