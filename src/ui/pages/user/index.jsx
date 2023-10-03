import { Container, ItemsContainer, Title, Wrapper, ShopwItems } from "./styled";
import CommerceCard from "../../components/commerce-card";
import CommerceUserSection from "../../components/commerce-user-section";
import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import { useEffect, useState } from "react";
import useAuthStore from "../../../store/authStore";

const name = "Aleksandar Radić";
const img = "/img/user-generic.png";

const favoriteCommerces = [
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
];

const favoriteProducts = [
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
];

const User = () => {
  const [commercesValue, setCommercesValue] = useState(favoriteCommerces);
  const [showAllCommerces, setShowAllCommerces] = useState(false);
  const [productsValue, setproductsValue] = useState(favoriteProducts);
  const [showAllProducts, setshowAllProducts] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#55347f")
  const [secondaryColor, setSecondaryColor] = useState("#3B2559")
  const [searchColor, setSearchColor] = useState("rgba(59, 37, 89, 0.6)")
  const [role, setRole] = useState("none");
  const { isUserLoggedIn } = useAuthStore()

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
    <Container>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role} />
      <CommerceUserSection name={name} img={img} />
      <div>
        <Title>omiljene trgovine</Title>
        <Wrapper>
          <ItemsContainer>
            {commercesValue
              .slice(0, showAllCommerces ? commercesValue.length : 4)
              .map((commerce) => (
                <CommerceCard key={commerce.name} name={commerce.name} img={commerce.img} />
              ))}
          </ItemsContainer>
        </Wrapper>
      </div>
      {!showAllCommerces && (
        <ShopwItems onClick={() => setShowAllCommerces(true)}>
          Prikaži listu omiljenih radnji
        </ShopwItems>
      )}
      {showAllCommerces && (
        <ShopwItems onClick={() => setShowAllCommerces(false)}>
          Sakrij listu omiljenih radnji
        </ShopwItems>
      )}
      <div>
        <Title>Omiljeni artikli</Title>
        <Wrapper>
          <ItemsContainer>
            {productsValue.slice(0, showAllProducts ? productsValue.length : 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                discount={product.discount}
                productImg={product.productImg}
                commerceImg={product.commerceImg}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                validFrom={product.validFrom}
                validTo={product.validTo}
              />
            ))}
          </ItemsContainer>
        </Wrapper>
      </div>
      {!showAllProducts && (
        <ShopwItems onClick={() => setshowAllProducts(true)}>
          Prikaži listu omiljenih radnji
        </ShopwItems>
      )}
      {showAllProducts && (
        <ShopwItems onClick={() => setshowAllProducts(false)}>
          Sakrij listu omiljenih artikala
        </ShopwItems>
      )}
      <Footer />
    </Container>
  );
};

export default User;
