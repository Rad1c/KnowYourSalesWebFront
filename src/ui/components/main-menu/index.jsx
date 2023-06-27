import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  MenuItem,
  Menu,
  Button,
  Hidden,
} from "@mui/material";
import {
  Container,
  AppBarStyle,
  InputBaseStyle,
  MenuItemStyle,
  BtnSignStyle,
} from "./styled";
import SearchIcon from "/img/search.svg";
import { Diamond, DiamondContainer, DiamondText } from "../common/styled";
import useProductsStore from "../../../store/productsStore";
import useAuthStore from "../../../store/authStore";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const { getCategories, categories } = useProductsStore();
  const { isUserLoggedIn } = useAuthStore();
  const [role, setRole] = useState("none");
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState("#55347f");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setRole(isUserLoggedIn());
    const fetchCities = async () => {
      await getCategories();
      setCategoriesLoaded(true);
    };

    switch (role) {
      case "User":
        setBackgroundColor("#7F3551");
        break;
      case "Commerce":
        setBackgroundColor("#25593B");
        break;
      default:
        setBackgroundColor("#55347f");
    }

    fetchCities();
    categories.sort((a, b) => a.displaySeq - b.displaySeq);
  }, [role]);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (categoryId) => {
    console.log(categoryId);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <Container style={{ backgroundColor }}>
      <AppBar position="static" sx={AppBarStyle} style={{ backgroundColor }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleMenuOpen}
              sx={{ marginRight: 2 }}
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
          <div
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <img
              src="/img/kys-header.png"
              style={{ maxWidth: "100%", height: "5rem" }}
            />
          </div>

          <Hidden smDown>
            <InputBase
              variant="outlined"
              placeholder="Pretraga..."
              value={searchTerm}
              onChange={handleSearchChange}
              endAdornment={
                <IconButton>
                  <img src={SearchIcon} alt="Search Icon" />
                </IconButton>
              }
              sx={InputBaseStyle}
            />
            {role == "User" && (
              <DiamondContainer css={{ background: "transparent" }}>
                <Diamond css={{ background: "white" }}>
                  <p
                    css={DiamondText}
                    style={{
                      color: "#7F3551",
                      fontWeight: "bold",
                      fontSize: "2.6rem",
                    }}
                  >
                    K
                  </p>
                </Diamond>
              </DiamondContainer>
            )}
            {role == "Commerce" && (
              <DiamondContainer css={{ background: "transparent" }}>
                <Diamond css={{ background: "white" }}>
                  <p
                    css={DiamondText}
                    style={{
                      color: "#25593B",
                      fontWeight: "bold",
                      fontSize: "2.6rem",
                    }}
                  >
                    T
                  </p>
                </Diamond>
              </DiamondContainer>
            )}
            {role == "none" && (
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                css={BtnSignStyle}
                // onClick={() => navigate("/login")}
              >
                Prijava
              </Button>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* <Hidden smUp>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {categoriesLoaded &&
            categories.map((category) => (
              <MenuItem
                key={category.id}
                onClick={handleMenuClose}
                sx={{ color: "#fafafa" }}
              >
                {category.name}
              </MenuItem>
            ))}
        </Menu>
      </Hidden>

      <Hidden smDown>
        <MenuItemStyle>
          {categoriesLoaded &&
            categories.map((category) => (
              <Button
                key={category.id}
                color="inherit"
                sx={{ color: "#fafafa" }}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </Button>
            ))}
        </MenuItemStyle>
      </Hidden> */}
    </Container>
  );
};

export default MainMenu;
