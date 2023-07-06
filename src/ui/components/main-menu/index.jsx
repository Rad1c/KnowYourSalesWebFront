import { useState, useEffect } from "react";
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
import SearchIcon from "/img/search.svg";
import { Diamond, DiamondContainer, DiamondText } from "../common/styled";
import useAuthStore from "../../../store/authStore";
import Login from "../login";
import { useNavigate } from "react-router";

const MainMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { isUserLoggedIn, logout } = useAuthStore();
  const [role, setRole] = useState("none");
  const [backgroundColor, setBackgroundColor] = useState("#55347f");
  const [searchColor, setSearchColor] = useState("rgba(59, 37, 89, 0.6)");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setRole(isUserLoggedIn());

    switch (role) {
      case "User":
        setBackgroundColor("#7F3551");
        setSearchColor("rgba(89, 37, 57, 0.6)");
        break;
      case "Commerce":
        setBackgroundColor("#357F54");
        setSearchColor("rgba(37, 89, 59, 0.6)");
        break;
      default:
        setBackgroundColor("#55347f");
        setSearchColor("rgba(59, 37, 89, 0.6)");
    }
  }, [role]);

  // // TODO: ubaciti ikonicu ( X ) koja ce se prikazivati kad se meni otvori, iskoristiti funkc ispod za zatvaranje
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

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
                  // marginRight: "2rem",
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
                  src="../../../../public/img/Fav-shop.svg"
                  alt="Favorite shop logo"
                  style={{
                    marginTop: "2rem",
                    height: "2.6rem",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="../../../../public/img/Fav-article.svg"
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
                      K
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
                  {/* <Login /> */}
                </Modal>
              </div>
            )}
            {role == "Commerce" && (
              <div>
                <img
                  src="../../../../public/img/Add-shop.svg"
                  alt="Favorite shop logo"
                  style={{
                    marginTop: "2rem",
                    height: "2.6rem",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="../../../../public/img/Add-article.svg"
                  alt="Favorite article logo"
                  style={{
                    marginTop: "2rem",
                    height: "2.6rem",
                    cursor: "pointer",
                  }}
                />
                <DiamondContainer
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
                      T
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
                    <p style={{ cursor: "pointer" }}>Podešavanja naloga</p>
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
