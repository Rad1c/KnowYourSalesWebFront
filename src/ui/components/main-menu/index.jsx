/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Hidden,
  Modal,
} from "@mui/material";
import {
  Container,
  AppBarStyle,
  InputBaseStyle,
  UserIcon,
  CommerceIcon,
  BtnSign,
  FavoriteContainer,
  FavoriteContainerContent,
  FavoriteContainerEmpty,
  AccountMenu,
  AccountItem,
  ModalContainer,
} from "./styled";
import { Diamond, DiamondContainer, DiamondText } from "../common/styled";
import SearchIcon from "/img/search.svg";
import Login from "../login";
import useAuthStore from "../../../store/authStore";
import useAccountStore from "../../../store/accountStore";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import AddShop from "../modals/add-shop";
import AddArticle from "../modals/add-article";
import FavoriteProductCard from "../favorite-product-card";
import FavoriteShopCard from "../favorite-shop-card";

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
    productImg: "/img/product.png",
    name: "PATIKE 1",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "2",
    productImg: "/img/product.png",
    name: "PATIKE 2",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "3",
    productImg: "/img/product.png",
    name: "PATIKE 3",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "4",
    productImg: "/img/product.png",
    name: "PATIKE 4",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "5",
    productImg: "/img/product.png",
    name: "PATIKE 5",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "6",
    productImg: "/img/product.png",
    name: "PATIKE 6",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "7",
    productImg: "/img/product.png",
    name: "PATIKE 7",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "8",
    productImg: "/img/product.png",
    name: "PATIKE 8",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
  {
    id: "9",
    productImg: "/img/product.png",
    name: "PATIKE 9",
    oldPrice: 100.0,
    newPrice: 80.0,
    validTo: "24.03.2023",
  },
];

const MainMenu = ({backgroundColor, searchColor, role}) => {
  const [setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [openAddShopModal, setOpenAddShopModal] = useState(false);
  const [openAddArticleModal, setOpenAddArticleModal] = useState(false);
  const [openFavoriteCommerceModal, setOpenFavoriteCommerceModal] = useState(false)
  const [openFavoriteArticleModal, setOpenFavoriteArticleModal] = useState(false)
  const [name, setName] = useState("")
  const { logout } = useAuthStore();
  const { getUser, getCommerce } = useAccountStore();
  const navigate = useNavigate();

  // TODO: za search meni funkcionalnost; treba je dovrsiti
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  useMemo(() => {
    const fetchUserName = async (role) => {
      if(role === "User"){
        await getUser().then(response => setName(response.data.firstName))
      }

      if(role === "Commerce"){
        await getCommerce().then(response => setName(response.data.name))
      }
    }

    fetchUserName(role)
  }, [role])

  return (
    <Container
      style={{ backgroundColor }}
    >
      <AppBar position="static" sx={AppBarStyle} style={{ backgroundColor }}>
        <Toolbar sx={{ justifyContent: "space-between", marginTop: ".5rem" }}>
          <Hidden mdUp>
            <div
              style={{
                padding: "1rem 0",
                marginTop: "0.5rem",
              }}
            >
              <img
                src="/img/kys-white-logo.png"
                style={{
                  minWidth: "100%",
                  height: "5rem",
                }}
              />
            </div>
          </Hidden>
          <Hidden mdDown>
            <div
              style={{
                padding: "1rem 0",
              }}
            >
              <img
                src="/img/kys-header.png"
                style={{
                  minWidth: "100%",
                  height: "5rem",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/home")}
              />
            </div>
          </Hidden>
          <Hidden smUp>
            <IconButton
              sx={{ marginTop: "0.5rem" }}
              color="inherit"
              edge="start"
              onClick={handleMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="white"
                  d="M4 18h16v-2H4zm0-5h16v-2H4zm0-5h16V6H4z"
                />
              </svg>
            </IconButton>
          </Hidden>

          <Hidden smDown>
            <InputBase
              variant="outlined"
              placeholder="Pretražite..."
              value={searchTerm}
              onChange={handleSearchChange}
              endAdornment={
                <IconButton>
                  <img src={SearchIcon} alt="Search Icon" />
                </IconButton>
              }
              sx={InputBaseStyle({ searchColor })}
            />
            {role == "User" && (
              <div style={{ display: "flex", gap: "4rem" }}>
                <UserIcon
                  src="/img/Fav-shop.svg"
                  alt="Favorite shop logo"
                  onClick={() => setOpenFavoriteCommerceModal(true)}
                />
                <Modal
                  slotProps={{
                    backdrop: {
                      style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    },
                  }}
                  open={openFavoriteCommerceModal}
                  onClose={() => setOpenFavoriteCommerceModal(false)}
                >
                  <FavoriteContainer style={{right: "19rem"}}>
                    {favoriteCommerces.length > 0 ? 
                      <FavoriteContainerContent>
                        {favoriteCommerces.map(shop => (
                          <div key={shop.id} onClick={() => navigate("/commerce")}>
                            <FavoriteShopCard
                              key={shop.id}
                              id={shop.id}
                              name={shop.name}
                              commerceImg={shop.img}
                            />
                          </div>
                        ))}
                      </FavoriteContainerContent> :
                      <FavoriteContainerEmpty>
                        Nemate sačuvanih prodavnica
                      </FavoriteContainerEmpty>
                    }
                  </FavoriteContainer>
                </Modal>
                <UserIcon
                  src="/img/Fav-article.svg"
                  alt="Favorite article logo"
                  onClick={() => setOpenFavoriteArticleModal(true)}
                />
                <Modal
                  slotProps={{
                    backdrop: {
                      style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    },
                  }}
                  open={openFavoriteArticleModal}
                  onClose={() => setOpenFavoriteArticleModal(false)}
                >
                  <FavoriteContainer style={{right: "12rem"}}>
                    {favoriteProducts.length > 0 ? 
                      <FavoriteContainerContent>
                        {favoriteProducts.map(product => (
                          <div key={product.id} onClick={() => navigate("/product")}>
                            <FavoriteProductCard
                              key={product.id}
                              name={product.name}
                              productImg={product.productImg}
                              commerceImg={product.commerceImg}
                              newPrice={product.newPrice}
                              validTo={product.validTo}
                            />
                          </div>
                        ))} 
                      </FavoriteContainerContent> :
                      <FavoriteContainerEmpty>
                        Nemate sačuvanih artikala
                      </FavoriteContainerEmpty>
                    }
                  </FavoriteContainer>
                </Modal>
                <DiamondContainer
                  onClick={() => setOpen(true)}
                  css={{
                    background: "transparent",
                    marginTop: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <Diamond
                    css={{
                      background: "white",
                      height: "4rem",
                      width: "4rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <p
                      css={DiamondText}
                      style={{
                        color: "#7F3551",
                        fontWeight: "bold",
                        height: "4rem",
                        width: "4rem",
                      }}
                    >
                      {name.slice(0, 1).toUpperCase()}
                    </p>
                  </Diamond>
                </DiamondContainer>
                <Modal
                  slotProps={{
                    backdrop: {
                      style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    },
                  }}
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <AccountMenu>
                    <AccountItem onClick={() => navigate("/user")}>
                      Podešavanja naloga
                    </AccountItem>
                    <AccountItem onClick={logout}>
                      Odjavite se
                    </AccountItem>
                  </AccountMenu>
                </Modal>
              </div>
            )}
            {role == "Commerce" && (
              <div style={{ display: "flex", gap: "4rem" }}>
                <CommerceIcon
                  src="/img/Add-shop.svg"
                  alt="Favorite shop logo"
                  onClick={() => setOpenAddShopModal(true)}
                />
                <CommerceIcon
                  src="/img/Add-article.svg"
                  alt="Favorite article logo"
                  onClick={() => setOpenAddArticleModal(true)}
                />
                <DiamondContainer
                  onClick={() => setOpen(true)}
                  css={{
                    background: "transparent",
                    marginTop: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <Diamond
                    css={{
                      background: "white",
                      height: "4rem",
                      width: "4rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <p
                      css={DiamondText}
                      style={{
                        color: "#25593B",
                        fontWeight: "bold",
                        height: "4rem",
                        width: "4rem",
                      }}
                    >
                      {name.slice(0, 1).toUpperCase()}
                    </p>
                  </Diamond>
                </DiamondContainer>
                <Modal
                  slotProps={{
                    backdrop: {
                      style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    },
                  }}
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <AccountMenu>
                    <AccountItem onClick={() => navigate("/commerce")}>
                      Podešavanja naloga
                    </AccountItem>
                    <AccountItem onClick={logout}>
                      Odjavite se
                    </AccountItem>
                  </AccountMenu>
                </Modal>
              </div>
            )}
            {role == "none" && (
              <div>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  css={BtnSign}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Prijavite se
                </Button>
                <Modal
                  slotProps={{
                    backdrop: {
                      style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    },
                  }}
                  open={open}
                  onClose={() => setOpen(false)}
                >
                  <Login />
                </Modal>
              </div>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Modal open={openAddShopModal} onClose={() => setOpenAddShopModal(false)} disableAutoFocus 
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ModalContainer>
          <AddShop setIsModalOpen={isModalOpen => setOpenAddShopModal(isModalOpen)}/>
        </ModalContainer>
      </Modal>
      <Modal open={openAddArticleModal} onClose={() => setOpenAddArticleModal(false)} disableAutoFocus 
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <ModalContainer>
          <AddArticle setIsModalOpen={isModalOpen => setOpenAddArticleModal(isModalOpen)}/>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default MainMenu;
