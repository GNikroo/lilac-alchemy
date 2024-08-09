import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import appStyles from "../App.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../assets/lavcal.jpg";
import img2 from "../assets/rosemary.jpg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Organic Lavender and Calendula Salve",
      link: "https://www.etsy.com/se-en/listing/1759329756/organic-lavender-and-calendula-salve?click_key=d10ccf14e596985448bbbe61fee2ae263b679b16%3A1759329756&click_sum=edff182f&ref=shop_home_active_1",
      image: img2,
    },
    {
      title: "Organic Rosemary Salve",
      link: "https://www.etsy.com/se-en/listing/1759318992/organic-rosemary?click_key=a772e46afab68388e6af1e457450ccea16083a39%3A1759318992&click_sum=24892839&ref=shop_home_active_2",
      image: img1,
    },
  ];
  return (
    <Container>
      <div>
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">
              Welcome to <div className={appStyles.Title}>Lilac Alchemy</div>
            </h1>
            <p className={styles.Subheading}>
              Discover our range of natural, handmade salves crafted with love
              and care. Nurture your body and soul with our handcrafted salves,
              made with love and intention. Every jar of salve is unique,
              reflecting the natural beauty of the ingredients we use. We take
              pride in offering organic, cruelty-free products that are as
              gentle on the earth as they are on your skin.
            </p>
            <div className="text-center m-3">
              <a href="/products" className={`${styles.Button} mt-3`}>
                read more
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <h2 className={`${styles.Shop} text-center`}>shop our products</h2>
          {products.map((product, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
            >
              <Card className={`${styles.ProductCard} text-center`}>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.Button} p-0`}
                >
                  <Card.Img
                    className={`${styles.CardImg} pt-3`}
                    variant="top"
                    src={product.image}
                    alt={product.title}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className={styles.ProductTitle}>
                      {product.title}
                    </Card.Title>
                    <ins>buy now at etsy.com</ins>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Home;
