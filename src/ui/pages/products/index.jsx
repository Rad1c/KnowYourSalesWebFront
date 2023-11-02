/* eslint-disable react/prop-types */
import { CardContainer, ContentWrapper } from "./styled";
import { Pagination } from "@mui/material";
import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import SortProducts from "../../components/sort-products";
import useProductsStore from "../../../store/productsStore";
import { useColor } from "../../../hooks/useColors";
import { useEffect } from "react";

const Products = ({ role }) => {
  const { articles, getArticles } = useProductsStore();

  useEffect(() => {
    const fetchArticles = async () =>{
      await getArticles(100, 1)
    };

    fetchArticles();
    console.log(articles)
  }, [])
  
  const { primaryColor, secondaryColor, searchColor } = useColor(role)

  return (
    <ContentWrapper>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role}/>
      <SortProducts primaryColor={primaryColor} secondaryColor={secondaryColor}/>
      <CardContainer>
        {articles &&
          articles.map((article) => (
            <div key={article.articleId}>
              <ProductCard
                key={article.artileId}
                role={role}
                id={article.artileId}
                discount={Math.round(article.sale)}
                productImg={article.picture}
                commerceImg={article.logo}
                name={article.name}
                oldPrice={article.oldPrice}
                newPrice={article.newPrice}
                validFrom={article.created.slice(0, 6).split("/").join(".")}
                validTo={article.validDate.slice(0, 10).split("/").join(".")}
                primaryColor={primaryColor}
              />
            </div>
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
