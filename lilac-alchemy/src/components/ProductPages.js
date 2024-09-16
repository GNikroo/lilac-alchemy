import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { productPageList } from "../data";
import styles from "../styles/ProductPages.module.css";

function ProductPages() {
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProducts = productPageList.flatMap((item) => item.product);

  const product = allProducts.find(
    (prod) => prod.title === decodeURIComponent(title)
  );

  if (!product) {
    return (
      <Container className="my-5 px-4">
        <button
          onClick={() => navigate("/collection")}
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            fontSize: "inherit",
          }}
        >
          <span className={`${styles.Back}`}> &larr; back to collection</span>
        </button>
        <h2 className="text-center">Product not found</h2>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <button
        onClick={() => navigate("/collection")}
        style={{
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
          fontSize: "inherit",
        }}
      >
        <span className={`${styles.Back}`}> &larr; back to collection</span>
      </button>
      <Card className={`${styles.Card} mb-4 border-0`}>
        <Card.Body>
          <h2 className={styles.Title}>{product.title}</h2>
          <p className={styles.Text}>{product.description}</p>
          <p className={styles.Warning}>
            <em>
              Natural variances may occur, adding to the unique charm and
              authenticity of our artisanal product.
            </em>
          </p>
          <h4 className={styles.Ingredients}>Main Ingredients</h4>
          {product.ingredients.map((ingredient, idx) => (
            <div key={idx}>
              <h5 className={styles.IngredientName}>{ingredient.name}</h5>
              <p className={styles.Text}>{ingredient.properties}</p>
            </div>
          ))}
          <div className="text-center">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.Button} mt-3`}
            >
              buy now at etsy.com
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductPages;
