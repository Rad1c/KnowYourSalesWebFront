/* eslint-disable react/prop-types */
import {
  Container,
  ProductMapContainer,
  ProductCardContainer,
  Title,
  MapContainerWrapper,
} from "./styled";
import MainMenu from "../../components/main-menu";
import ProductDetails from "../../components/product-details";
import ProductCard from "../../components/product-card";
import Footer from "../../components/footer";
import { useColor } from "../../../hooks/useColors";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProductsStore from "../../../store/productsStore";

const Product = ({ role }) => {
  const { primaryColor, searchColor } = useColor(role);
  const { id } = useParams();
  const {
    getArticle,
    article,
    moreArticlesFromCommerce,
    getMoreArticlesFromCommerce,
    moreArticlesFromCategory,
    getMoreArticlesFromCategory,
    setSearchIsEnabled,
  } = useProductsStore();

  useEffect(() => {
    const fetchArticleById = async () => {
      await getArticle(id);
    };

    fetchArticleById();
  }, [id]);

  useEffect(() => {
    if (article) {
      const fetchMoreArticlesFromCommerce = async (commerceId) => {
        await getMoreArticlesFromCommerce(commerceId);
      };

      const fetchMoreArticlesFromCategory = async (categoryId) => {
        await getMoreArticlesFromCategory(categoryId);
      };

      fetchMoreArticlesFromCommerce(article.commerceId);
      fetchMoreArticlesFromCategory(article.categoryId);
    }
  }, [article]);

  useEffect(() => {
    setSearchIsEnabled(false);
  }, []);

  return (
    <Container>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role} />
      {article && (
        <ProductMapContainer>
          <ProductDetails
            primaryColor={primaryColor}
            role={role}
            description={article.description}
            img={article.commerceLogo}
            discount={article.sale}
            newPrice={article.newPrice}
            oldPrice={article.oldPrice}
            productName={article.name}
            images={article.images}
          />
          <MapContainerWrapper>
            <MapContainer
              center={[article.geoLocations[0].longitude, article.geoLocations[0].latitude]}
              zoom={15}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%", zIndex: "1" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {article.geoLocations.map((geo) => (
                <Marker position={[geo.longitude, geo.latitude]}>
                  <Popup>{geo.address}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </MapContainerWrapper>
        </ProductMapContainer>
      )}
      <div>
        <Title style={{ color: primaryColor }}>Još popusta iz ove kategorije</Title>
        <ProductCardContainer>
          {moreArticlesFromCategory.items &&
            moreArticlesFromCategory.items.map((article) => (
              <ProductCard
                key={article.id}
                role={role}
                id={article.id}
                discount={article.sale}
                productImg={article.picture}
                commerceImg={article.logo}
                oldPrice={article.oldPrice}
                newPrice={article.newPrice}
                validFrom={article.created.slice(0, 6).split("/").join(".")}
                validTo={article.validDate.slice(0, 10).split("/").join(".")}
                primaryColor={primaryColor}
              />
            ))}
        </ProductCardContainer>
      </div>
      <div style={{ marginBottom: "6rem" }}>
        <Title style={{ color: primaryColor }}>Još popusta iz ove trgovine</Title>
        <ProductCardContainer>
          {moreArticlesFromCommerce.items &&
            moreArticlesFromCommerce.items.map((article) => (
              <ProductCard
                key={article.id}
                role={role}
                id={article.id}
                discount={article.sale}
                productImg={article.picture}
                commerceImg={article.logo}
                oldPrice={article.oldPrice}
                newPrice={article.newPrice}
                validFrom={article.created.slice(0, 6).split("/").join(".")}
                validTo={article.validDate.slice(0, 10).split("/").join(".")}
                primaryColor={primaryColor}
              />
            ))}
        </ProductCardContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Product;
