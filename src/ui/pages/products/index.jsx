import { Pagination } from "@mui/material";
import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import { CardContainer, ContentWrapper } from "./styled";
import SortProducts from "../../components/sort-products";
import { useState, useEffect } from "react";
import useAuthStore from "../../../store/authStore";
import useProductsStore from "../../../store/productsStore";

const Products = () => {
  const [primaryColor, setPrimaryColor] = useState("#55347f")
  const [secondaryColor, setSecondaryColor] = useState("#3B2559")
  const [searchColor, setSearchColor] = useState("rgba(59, 37, 89, 0.6)")
  const [role, setRole] = useState("none");
  const { isUserLoggedIn } = useAuthStore();
  const { articles, getArticles } = useProductsStore();

  useEffect(() => {
    const fetchArticles = async () =>{
      await getArticles(100, 1)
    };

    fetchArticles();
  }, [])

  useEffect(() => {
    setRole(isUserLoggedIn())
  
    switch (role) {
      case "User":
        setPrimaryColor("#7F3551");
        setSecondaryColor("#592539")
        setSearchColor("rgba(89, 37, 57, 0.6)");
        break;
      case "Commerce":
        setPrimaryColor("#357F54");
        setSecondaryColor("#25593B")
        setSearchColor("rgba(37, 89, 59, 0.6)");
        break;
      default:
        setPrimaryColor("#55347f");
        setSecondaryColor("#3B2559")
        setSearchColor("rgba(59, 37, 89, 0.6)");
    }
  }, [role])
  

  return (
    <ContentWrapper>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role}/>
      <SortProducts primaryColor={primaryColor} secondaryColor={secondaryColor}/>
      <CardContainer>
        {articles &&
          articles.map((article) => (
            <ProductCard
              key={article.artileId}
              id={article.artileId}
              discount={article.sale}
              productImg={"/img/product.png"}
              commerceImg={"/img/product-commerce.png"}
              name={article.name}
              oldPrice={article.oldPrice}
              newPrice={article.newPrice}
              validFrom={article.created.slice(0, 10).split("/").join(".")}
              validTo={article.validDate.slice(0, 10).split("/").join(".")}
              primaryColor={primaryColor}
            />
          ))}
      </CardContainer>
      <Pagination
        count={Math.ceil(articles.length / 12)}
        shape="rounded"
        size="large"
        sx={{
          marginBottom: "8rem",
          "& .css-yx0nvq-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
            backgroundColor: primaryColor,
            color: "#fafafa",
          },
          "& .css-yx0nvq-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover": {
            backgroundColor: secondaryColor,
          },
        }}
      />
      <Footer />
    </ContentWrapper>
  );
};

export default Products;
