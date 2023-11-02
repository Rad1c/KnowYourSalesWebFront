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
    const searchParams = new URLSearchParams(window.location.search);
    const cityId = searchParams.get("city");
    const categoryId = searchParams.get("category");

    const fetchArticles = async () => {
      if (cityId && categoryId) {
        await getArticles(6, 1, null, cityId, categoryId);
      } else {
        await getArticles(6, 1);
      }
    };

    fetchArticles();
  }, []);

  const handlePagination = async (event, value) => {
    const searchParams = new URLSearchParams(window.location.search);
    const cityId = searchParams.get("city");
    const categoryId = searchParams.get("category");

    if (cityId && categoryId) {
      await getArticles(6, value, null, cityId, categoryId);
    } else {
      await getArticles(6, value);
    }
  };

  const { primaryColor, secondaryColor, searchColor } = useColor(role);

  return (
    <ContentWrapper>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role} />
      <SortProducts primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <CardContainer>
        {articles.items &&
          articles.items.map((article) => (
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
        count={Math.ceil(articles.totalCount / 6)}
        shape="rounded"
        size="large"
        onChange={handlePagination}
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
