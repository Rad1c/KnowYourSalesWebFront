import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import { CardContainer, ContentWrapper } from "./styled";

const Products = () => {
  return (
    <ContentWrapper>
      <MainMenu />
      <CardContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardContainer>
      <Footer />
    </ContentWrapper>
  );
};

export default Products;
