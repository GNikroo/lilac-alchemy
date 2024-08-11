import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/ProductPages.module.css";

function ProductPages() {
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productList = [
    {
      product: [
        {
          title: "Lavender and Calendula",
          subtitle: "soothing",
          description: (
            <>
              {`Indulge your skin with Lilac Alchemy's Organic Lavender and Calendula Salve. Crafted with the finest organic ingredients, this luxurious salve offers a blend of natural healing properties designed to nurture and revitalize your skin.`}
              <br />
              {`Enhanced with natural emollients, this harmonious blend not only soothes and repairs damaged skin but also imparts a youthful softness and smoothness. Ideal for everyday skin irritations or persistent issues, Lilac Alchemy's Organic Lavender and Calendula Salve is your ultimate solution for achieving a refreshed and radiant complexion.`}
            </>
          ),
          ingredients: [
            {
              name: "Lavender",
              properties:
                "Renowned for its calming and anti-inflammatory properties, lavender gently soothes and alleviates skin irritations. It works wonders in reducing redness and promoting the speedy healing of minor cuts, burns, and insect bites. With its natural antiseptic qualities, lavender also helps prevent infections while soothing dry, itchy skin, leaving you feeling refreshed and rejuvenated.",
            },
            {
              name: "Calendula",
              properties:
                "Embrace the powerful, nurturing capabilities of calendula, a treasure trove of antioxidants and anti-inflammatory compounds. This magical ingredient accelerates the healing process of wounds and diminishes the appearance of scars. Perfect for treating eczema, psoriasis, and other skin conditions, calendula provides deep, nourishing hydration and helps restore the skin's natural barrier.",
            },
          ],
          link: "https://www.etsy.com/se-en/listing/1759318992/salves-moisturizer-balm-organic-healing",
        },
      ],
    },
    {
      product: [
        {
          title: "Organic Rosemary",
          subtitle: "energizing",
          description: (
            <>
              {`Discover the energizing and restorative properties of Lilac Alchemy's new Organic Rosemary Salve. Meticulously crafted with premium organic ingredients, this invigorating salve is designed to refresh and rejuvenate your skin, providing a natural boost for a vibrant, healthy look.`}
              <br />
              {`Elevate your skincare routine with this expertly crafted balm to energize and restore. Infused with premium organic ingredients, this revitalizing salve is designed to refresh and rejuvenate your skin, delivering a natural boost for a vibrant, healthy appearance.`}
            </>
          ),
          ingredients: [
            {
              name: "Rosemary",
              properties:
                "Unlock the full potential of rosemary, a powerhouse herb known for its exceptional health benefits. Rich in antioxidants and anti-inflammatory compounds, rosemary helps protect and heal your skin from environmental stressors while soothing inflammation. Plus, it alleviates the symptoms of dandruff, promoting a healthier, more balanced scalp.",
            },
            {
              name: "Nourishing Emollients",
              properties:
                "This salve is enriched with hydrating emollients that provide deep moisturization and create a protective barrier to lock in essential moisture. Combining seamlessly with rosemary, these emollients calm and restore dry, irritated skin, leaving it soft, smooth, and beautifully revitalized.",
            },
          ],
          link: "https://www.etsy.com/se-en/listing/1759318992/salves-moisturizer-balm-organic-healing",
        },
      ],
    },
  ];

  const allProducts = productList.flatMap((item) => item.product);

  const product = allProducts.find(
    (prod) => prod.title === decodeURIComponent(title)
  );

  if (!product) {
    return (
      <Container>
        <h2>Product not found</h2>
      </Container>
    );
  }

  return (
    <Container>
      <button
        onClick={() => navigate(-1)}
        style={{
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
          fontSize: "inherit",
        }}
      >
        <span className={`${styles.Back}`}> &larr; back</span>
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
