import ProductImages from "../product-images";
import ProductPrice from "../product-price";
import { Container, ProductNameHolder, Description, ImgContainer } from "./styled";

const ProductDetails = () => {
  const productName = "nike renew ride 3";
  const description =
    "Nova kolekcija je stigla i sa sobom donosi funkcionalne krojeve, najbolje materijale i zanimljive kolorite! Pogledaj vrhunsku ponudu patika, trenerki, dukseva, majica i još mnogo toga.";
  const oldPrice = "210.00";
  const newPrice = "178.50";
  const discount = "15";
  const img = "/img/product-commerce.png";
  return (
    <Container>
      <ProductNameHolder>{productName}</ProductNameHolder>
      <ProductPrice oldPrice={oldPrice} newPrice={newPrice} discount={discount} />
      <ImgContainer>
        <img
          src={img}
          alt="commerce-img"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </ImgContainer>
      <Description>{description}</Description>
      <ProductImages />
    </Container>
  );
};

export default ProductDetails;
