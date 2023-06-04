import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Button,
  Hidden,
} from "@mui/material";
import { Container, AppBarStyle, InputBaseStyle, MenuItemStyle } from "./styled";
import SearchIcon from "/img/search.svg";
import { Diamond, DiamondContainer, DiamondText } from "../common/styled";
import useProductsStore from "../../../store/productsStore";

const MainMenu = () => {
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const { getCategories, categories } = useProductsStore();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const fetchCities = async () => {
      await getCategories();
      setCategoriesLoaded(true);
    };

    fetchCities();
    categories.sort((a, b) => a.displaySeq - b.displaySeq);
  }, []);

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
    <Container>
      <AppBar position="static" sx={AppBarStyle}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleMenuOpen}
              sx={{ marginRight: 2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="white" d="M4 18h16v-2H4zm0-5h16v-2H4zm0-5h16V6H4z" />
              </svg>
            </IconButton>
          </Hidden>
          <div css={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <img src="/img/kys-header.png" sx={{ maxWidth: "100%", height: "auto" }} />
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
            <DiamondContainer css={{ background: "transparent" }}>
              <Diamond css={{ background: "#777" }}>
                <p css={DiamondText}>K</p>
              </Diamond>
            </DiamondContainer>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden smUp>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {categoriesLoaded &&
            categories.map((category) => (
              <MenuItem key={category.id} onClick={handleMenuClose} sx={{ color: "#fafafa" }}>
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
      </Hidden>
    </Container>
  );
};

export default MainMenu;
