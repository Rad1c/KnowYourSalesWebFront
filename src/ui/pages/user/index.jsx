/* eslint-disable react/prop-types */
import { Container, ItemsContainer, Title, Wrapper, ShowItems } from "./styled";
import CommerceCard from "../../components/commerce-card";
import CommerceUserSection from "../../components/commerce-user-section";
import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import { useEffect, useState } from "react";
import { useColor } from "../../../hooks/useColors";
import useAccountStore from "../../../store/accountStore";

const favoriteCommerces = [
  {
    id: "1",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "2",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "3",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "4",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "5",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "7",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "8",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
];

const favoriteProducts = [
  {
    id: "1",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 1",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "2",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 2",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 3",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "4",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 4",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "5",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 5",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "6",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 6",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "7",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 7",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "8",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 8",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "9",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    name: "PATIKE 9",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
];

const User = ({ role }) => {
  const [commercesValue] = useState(favoriteCommerces);
  const [showAllCommerces, setShowAllCommerces] = useState(false);
  const [productsValue] = useState(favoriteProducts);
  const [showAllProducts, setshowAllProducts] = useState(false);
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("")
  const [user, setUser] = useState({})
  const { getUser } = useAccountStore()
  const { primaryColor, searchColor } = useColor(role);

  useEffect(() => {
    const fetchUser = async () => {
      await getUser().then(response => setUser(response.data))
    }

    if(!counter){
      fetchUser();
      setCounter(1)
    }

    setName(user?.firstName + " " + user?.lastName)
  }, [user])

  return (
    <Container>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role} />
      <CommerceUserSection name={name} img={"/img/user-generic.png"} role={role} user={user} allowed={"User"}/>
      <div>
        <Title>Omiljene trgovine</Title>
        <Wrapper>
          <ItemsContainer>
            {commercesValue
              .slice(0, showAllCommerces ? commercesValue.length : 4)
              .map((commerce) => (
                <CommerceCard key={commerce.id} name={commerce.name} img={commerce.img} />
              ))}
          </ItemsContainer>
        </Wrapper>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "8rem" }}>
        {!showAllCommerces && (
          <ShowItems onClick={() => setShowAllCommerces(true)}>
            Prikaži listu omiljenih radnji
          </ShowItems>
        )}
        {showAllCommerces && (
          <ShowItems onClick={() => setShowAllCommerces(false)}>
            Sakrij listu omiljenih radnji
          </ShowItems>
        )}
      </div>
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
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                validFrom={product.validFrom}
                validTo={product.validTo}
                primaryColor={primaryColor}
                role={role}
              />
            ))}
          </ItemsContainer>
        </Wrapper>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "11.8rem" }}>
        {!showAllProducts && (
          <ShowItems onClick={() => setshowAllProducts(true)}>
            Prikaži listu omiljenih radnji
          </ShowItems>
        )}
        {showAllProducts && (
          <ShowItems onClick={() => setshowAllProducts(false)}>
            Sakrij listu omiljenih artikala
          </ShowItems>
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default User;
