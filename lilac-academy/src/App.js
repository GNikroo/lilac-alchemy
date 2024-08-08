import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import EtsyShop from "./components/EtsyShop";
import ProductPages from "./components/ProductPages";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className={styles.Content}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<EtsyShop />} />
          <Route path="/product/:title" element={<ProductPages />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
