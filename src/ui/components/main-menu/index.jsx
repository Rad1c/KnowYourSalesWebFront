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
  BtnSign,
  AccountMenu,
} from "./styled";
import { Diamond, DiamondContainer, DiamondText } from "../common/styled";
import SearchIcon from "/img/search.svg";
import Login from "../login";
import useAuthStore from "../../../store/authStore";
import useAccountStore from "../../../store/accountStore";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

const MainMenu = ({backgroundColor, searchColor, role}) => {
  const [setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const { logout } = useAuthStore();
  const { getUser, getCommerce } = useAccountStore();
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // // TODO: ubaciti ikonicu ( X ) koja ce se prikazivati kad se meni otvori, iskoristiti funkc ispod za zatvaranje
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

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
      style={{ backgroundColor, position: "sticky", top: 0, zIndex: 10 }}
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
                onClick={() => navigate("/products")}
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
                <img
                  src="/img/Fav-shop.svg"
                  alt="Favorite shop logo"
                  style={{
                    marginTop: "2rem",
                    height: "2.6rem",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="/img/Fav-article.svg"
                  alt="Favorite article logo"
                  style={{
                    marginTop: "2rem",
                    height: "2.6rem",
                    cursor: "pointer",
                  }}
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
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/user")}
                    >
                      Podešavanja naloga
                    </p>
                    <p
                      style={{ marginTop: "1rem", cursor: "pointer" }}
                      onClick={logout}
                    >
                      Odjavite se
                    </p>
                  </AccountMenu>
                </Modal>
              </div>
            )}
            {role == "Commerce" && (
              <div style={{ display: "flex", gap: "4rem" }}>
                <img
                  src="/img/Add-shop.svg"
                  alt="Favorite shop logo"
                  style={{
                    marginTop: "1.5rem",
                    height: "3.2rem",
                    cursor: "pointer",
                    filter: "brightness(500%)",
                  }}
                />
                <img
                  src="/img/Add-article.svg"
                  alt="Favorite article logo"
                  style={{
                    marginTop: "1.5rem",
                    height: "3.2rem",
                    cursor: "pointer",
                    filter: "brightness(500%)",
                  }}
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
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/commerce")}
                    >
                      Podešavanja naloga
                    </p>
                    <p
                      style={{ marginTop: "1rem", cursor: "pointer" }}
                      onClick={logout}
                    >
                      Odjavite se
                    </p>
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
    </Container>
  );
};

export default MainMenu;
