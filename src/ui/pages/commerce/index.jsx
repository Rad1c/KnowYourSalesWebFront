/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {
  Container,
  ShopContainer,
  BtnContainer,
  BtnAdd,
  Title,
  ShowItems,
} from "./styled";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import ShopCard from "../../components/shop-card";
import CommerceUserSection from "../../components/commerce-user-section";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { useColor } from "../../../hooks/useColors";
import useAccountStore from "../../../store/accountStore";
import { Modal } from "@mui/material";
import AddShop from "../../components/modals/add-shop";
import useCommerceStore from "../../../store/commerceStore";
import UpdateShop from "../../components/modals/update-shop";
import AddArticle from "../../components/modals/add-article";

const products = [
  {
    id: "1",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "2",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "3",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "4",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "5",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "6",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "7",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "8",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "9",
    discount: 20,
    name: "Ime artikla",
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
];

const Commerce = ({ role }) => {
  const [productsValue] = useState(products);
  const [showAllShops, setShowAllShops] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [openAddShopModal, setOpenAddShopModal] = useState(false);
  const [openUpdateShopModal, setOpenUpdateShopModal] = useState(false);
  const [openAddArticleModal, setOpenAddArticleModal] = useState(false);
  // const [openUpdateArticleModal, setOpenUpdateArticleModal] = useState(false);
  const [shop, setShop] = useState({});
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({});
  const { getCommerce } = useAccountStore();
  const { primaryColor, searchColor } = useColor(role);
  const { shops, getShops } = useCommerceStore();

  useEffect(() => {
    const fetchUser = async () => {
      await getCommerce().then(response => setUser(response.data))
    }

    if(!counter){
      fetchUser();
      setCounter(1)
    }
  }, [user])

  useEffect(() => {
    const fetchShops = async () => {
      await getShops();
    }

    fetchShops();
  }, [])

  return (
    <Container>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role}/>
      <CommerceUserSection name={user?.name} img={user?.logo} role={role} user={user} allowed={"Commerce"} />
      <div>
        <Title style={{ color: primaryColor }}>Radnje</Title>
        <ShopContainer>
          {role === "Commerce" && 
            <BtnContainer onClick={() => setOpenAddShopModal(true)}>
              <BtnAdd src="/img/Add-shop.svg" alt="Button for shop adding" />
            </BtnContainer> }
          {shops && 
            shops.slice(0, showAllShops ? shops.length : role === "Commerce" ? 3 : 4).map((shop) => (
              <div key={shop.id} 
              onClick={() => 
                {
                  setShop(shop);
                  setOpenUpdateShopModal(true);
                }}>
                <ShopCard key={shop.id} city={shop.cityName} address={shop.address} latitude={shop.latitude} longitude={shop.longitude} role={role} />
              </div>
            ))
          }
        </ShopContainer>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "8rem" }}>
        {!showAllShops && (
          <ShowItems onClick={() => setShowAllShops(true)}>Prikaži listu dodanih radnji</ShowItems>
          )}
        {showAllShops && (
          <ShowItems onClick={() => setShowAllShops(false)}>Sakrij listu dodanih radnji</ShowItems>
          )}
      </div>
      <div>
        <Title style={{ color: primaryColor }}>Artikli</Title>
        <ShopContainer>
          {role === "Commerce" && 
            <BtnContainer onClick={() => setOpenAddArticleModal(true)}>
              <BtnAdd src="/img/Add-article.svg" alt="Button for shop adding"/>
            </BtnContainer> }
          {productsValue.slice(0, showAllProducts ? productsValue.length : role === "Commerce" ? 3 : 4).map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              discount={product.discount}
              name={product.name}
              productImg={product.productImg}
              commerceImg={product.commerceImg}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              validFrom={product.validFrom}
              validTo={product.validTo}
              primaryColor={primaryColor}
            />
          ))}
        </ShopContainer>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "11.8rem" }}>
        {!showAllProducts && (
          <ShowItems onClick={() => setShowAllProducts(true)}>
            Prikaži listu dodanih artikala
          </ShowItems>
        )}
        {showAllProducts && (
          <ShowItems onClick={() => setShowAllProducts(false)}>
            Sakrij listu dodanih artikala
          </ShowItems>
        )}
      </div>
      <Footer />
      <Modal open={openAddShopModal} onClose={() => setOpenAddShopModal(false)} disableAutoFocus 
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <AddShop setIsModalOpen={isModalOpen => setOpenAddShopModal(isModalOpen)} />
      </Modal>
      <Modal open={openUpdateShopModal} onClose={() => setOpenUpdateShopModal(false)} disableAutoFocus
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <UpdateShop shop={shop} setIsModalOpen={isModalOpen => setOpenUpdateShopModal(isModalOpen)}/>
      </Modal>
      <Modal open={openAddArticleModal} onClose={() => setOpenAddArticleModal(false)} disableAutoFocus
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <AddArticle shop={shop} commerceId={user.id} setIsModalOpen={isModalOpen => setOpenAddArticleModal(isModalOpen)}/>
      </Modal>
    </Container>
  );
};

export default Commerce;
