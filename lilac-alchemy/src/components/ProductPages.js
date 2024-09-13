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
          subtitle: "soothe",
          description: (
            <>
              {`Indulge your skin with Lilac Alchemy's Organic Lavender and Calendula Salve. Crafted with the finest organic ingredients, this luxurious salve offers a blend of natural healing properties designed to nurture and revitalize your skin.`}
              <br />
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
          link: "https://www.etsy.com/se-en/listing/1773832482/organic-lavender-and-calendula-salve?click_key=e8f2ebcc825305afb87f4026fd4bb84ecf336266%3A1773832482&click_sum=5456b57e&ref=shop_home_recs_3",
        },
      ],
    },
    {
      product: [
        {
          title: "Rosemary",
          subtitle: "energize",
          description: (
            <>
              {`Discover the energizing and restorative properties of Lilac Alchemy's new Organic Rosemary Salve. Meticulously crafted with premium organic ingredients, this invigorating salve is designed to refresh and rejuvenate your skin, providing a natural boost for a vibrant, healthy look.`}
              <br />
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
          link: "https://www.etsy.com/se-en/listing/1773838674/organic-rosemary-salve?click_key=ac9a6a53b595df6d14c83b63bd4943acc1f513a8%3A1773838674&click_sum=82165f9e&ref=shop_home_recs_4",
        },
      ],
    },
    {
      product: [
        {
          title: "Bug Away",
          subtitle: "protect",
          description: (
            <>
              {`Naturally defend with Lilac Alchemy's Bug Away Salve – a gentle shield for your skin. Step into nature with confidence and grace, knowing that our Bug Away Salve is your perfect outdoor companion. Crafted with a harmonious blend of nature's most nurturing ingredients, this balm doesn't just protect – it pampers.`}
              <br />
              <br />
              {`Each carefully selected essence works in tandem to create a soothing and aromatic experience that feels as luxurious as it is effective. This calming blend not only keeps bugs at bay but also nourishes your skin, transforming each application into a comforting, natural experience.
`}
            </>
          ),
          ingredients: [
            {
              name: "Eucalyptus",
              properties:
                "Known for its potent insect-repellent properties, eucalyptus oil creates a natural barrier, keeping bugs at bay with a touch of earthy freshness.",
            },
            {
              name: "Lavender",
              properties:
                "Soothing and serene, lavender oil calms the senses while offering a soft, floral shield against unwelcome pests.",
            },
            {
              name: "Clove",
              properties:
                "Rich and spicy, clove oil enhances protection with its warm aroma, adding a comforting layer of defense that feels like a cozy embrace.",
            },
            {
              name: "Vanilla Bean",
              properties:
                "Sweet and inviting, vanilla bean wraps the salve in a delicate, comforting scent, making it a joy to wear while gently deterring insects.",
            },
          ],
          link: "https://www.etsy.com/se-en/listing/1773762746/organic-bug-away-salve?click_key=0c36ad2749b50c8434f6e1d416b416f301c31f22%3A1773762746&click_sum=429393df&ref=shop_home_recs_4",
        },
      ],
    },
    {
      product: [
        {
          title: "Sweet Dreams",
          subtitle: "rest",
          description: (
            <>
              {`Indulge in restful nights with Lilac Alchemy Botanics Sweet Dreams Salve, crafted to enhance your bedtime routine.`}
              <br />
              <br />
              {`Infused with the calming essence of chamomile and lavender, this luxurious salve is designed to promote relaxation and a sense of tranquility.`}
            </>
          ),
          ingredients: [
            {
              name: "Chamomile",
              properties:
                "Known for its soothing properties, chamomile helps create a calming atmosphere that supports peaceful moments of rest. Its gentle, comforting aroma adds a serene touch to your nighttime routine.",
            },
            {
              name: "Lavender",
              properties:
                "Famous for its relaxing scent, lavender helps ease stress and promote a calming environment, perfect for unwinding after a long day. Its subtle fragrance encourages a sense of peace and relaxation.",
            },
          ],
          link: "https://www.etsy.com/se-en/listing/1773847318/organic-chamomile-and-lavender-sweet?click_key=3891e0a5a700f692c9a064e33f7f9d1ae8a0d24b%3A1773847318&click_sum=bb71a116&ref=shop_home_recs_2",
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
    <Container className="mt-4">
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
