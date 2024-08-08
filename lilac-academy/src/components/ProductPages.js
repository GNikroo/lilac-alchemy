// src/components/Products.js
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/Products.module.css";

function ProductPages() {
  const productList = [
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing and restorative",
      description:
        "Discover the soothing and restorative power of Lilac Alchemy's Organic Lavender and Calendula Salve. Expertly crafted with the finest organic ingredients, this luxurious salve is designed to nurture and heal your skin naturally.",
      ingredients: [
        {
          ing1: "Lavender",
          description:
            "Renowned for its calming and anti-inflammatory properties, lavender gently soothes and alleviates skin irritations. It works wonders in reducing redness and promoting the speedy healing of minor cuts, burns, and insect bites. With its natural antiseptic qualities, lavender also helps prevent infections while soothing dry, itchy skin, leaving you feeling refreshed and rejuvenated.",
          ing2: "Calendula",
          description:
            "Embrace the powerful, nurturing capabilities of calendula, a treasure trove of antioxidants and anti-inflammatory compounds. This magical ingredient accelerates the healing process of wounds and diminishes the appearance of scars. Perfect for treating eczema, psoriasis, and other skin conditions, calendula provides deep, nourishing hydration and helps restore the skin's natural barrier.",
        },
      ],
      link: "https://www.etsy.com/se-en/listing/1759318992/salves-moisturizer-balm-organic-healing?click_key=2e09e9035482c98ec5952deb89d7a27ee7ede6b8%3A1759318992&click_sum=e1401973&ref=shop_home_active_2",
    },
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing and restorative",
      description:
        "Discover the soothing and restorative power of Lilac Alchemy's Organic Lavender and Calendula Salve. Expertly crafted with the finest organic ingredients, this luxurious salve is designed to nurture and heal your skin naturally.",
      link: "https://www.etsy.com/se-en/listing/1759318992/salves-moisturizer-balm-organic-healing?click_key=2e09e9035482c98ec5952deb89d7a27ee7ede6b8%3A1759318992&click_sum=e1401973&ref=shop_home_active_2",
    },
    {
      title: "Lavender and Calendula Salve",
      subtitle: "soothing and restorative",
      description:
        "Discover the soothing and restorative power of Lilac Alchemy's Organic Lavender and Calendula Salve. Expertly crafted with the finest organic ingredients, this luxurious salve is designed to nurture and heal your skin naturally.",
      link: "https://www.etsy.com/se-en/listing/1759318992/salves-moisturizer-balm-organic-healing?click_key=2e09e9035482c98ec5952deb89d7a27ee7ede6b8%3A1759318992&click_sum=e1401973&ref=shop_home_active_2",
    },
  ];

  return (
    <Container>
      <h2>Our Products</h2>
      <Row>
        {productList.map((product, index) => (
          <Col key={index} md={4} className={`${styles.Card} mb-4`}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle>{product.subtitle}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductPages;
