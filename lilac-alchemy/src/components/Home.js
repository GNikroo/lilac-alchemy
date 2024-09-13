import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../assets/products/lavender/IMG_1555.jpg";
import img2 from "../assets/products/rosemary/IMG_1595.jpg";
import img3 from "../assets/products/bug_away/IMG_1610.jpg";
import img4 from "../assets/products/sweet_dreams/IMG_1587.jpg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Organic Lavender and Calendula Salve",
      link: "https://www.etsy.com/se-en/listing/1773832482/organic-lavender-and-calendula-salve?click_key=e8f2ebcc825305afb87f4026fd4bb84ecf336266%3A1773832482&click_sum=5456b57e&ref=shop_home_recs_3",
      image: img1,
    },
    {
      title: "Organic Rosemary Salve",
      link: "https://www.etsy.com/se-en/listing/1773838674/organic-rosemary-salve?click_key=ac9a6a53b595df6d14c83b63bd4943acc1f513a8%3A1773838674&click_sum=82165f9e&ref=shop_home_recs_4",
      image: img2,
    },
    {
      title: "Organic Bug Away Salve",
      link: "https://www.etsy.com/se-en/listing/1773762746/organic-bug-away-salve?click_key=0c36ad2749b50c8434f6e1d416b416f301c31f22%3A1773762746&click_sum=429393df&ref=shop_home_recs_4",
      image: img3,
    },
    {
      title: "Organic Sweet Dreams Salve",
      link: "https://www.etsy.com/se-en/listing/1773847318/organic-chamomile-and-lavender-sweet?click_key=3891e0a5a700f692c9a064e33f7f9d1ae8a0d24b%3A1773847318&click_sum=bb71a116&ref=shop_home_recs_2",
      image: img4,
    },
  ];

  return (
    <div>
      <div className={styles.HeroBanner}>
        <Container className="text-center">
          <div>
            <h1 className={styles.HeroTitle}>nurture body and soul</h1>
          </div>
          <Link to="/collection">
            <button className={styles.HeroButton}>read more</button>
          </Link>
        </Container>
      </div>
      <Container>
        <Row className="mt-4">
          <Col>
            <p>
              Discover our range of pure, handmade salves crafted with love and
              care. Nurture your body and soul with our handcrafted salves, made
              with love and intention. Every jar of salve is unique, reflecting
              the natural beauty of the ingredients we use. We take pride in
              offering organic, cruelty-free products that are as gentle on the
              earth as they are on your skin.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
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
              <Card className={`${styles.ProductCard} text-center border-0`}>
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
      </Container>
    </div>
  );
}

export default Home;
