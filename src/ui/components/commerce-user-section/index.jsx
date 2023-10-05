/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  P,
  Container,
  ImgContainer,
  BtnEditUser,
  BtnEditCommerce,
  BtnDeactivate,
  BtnFavorite,
  ControlsContainer,
  delimiterStyle,
} from "./styled";

const CommerceUserSection = ({ name, img, role, allowed }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <div style={{ display: "flex", marginBottom: "1.6rem" }}>
        <ControlsContainer>
          <ImgContainer>
            <img src={img} alt="commerce-img" style={{ height: `${role === "User" ? "4.5rem" : "3rem"}` }} />
          </ImgContainer>
          <P>{name}</P>
        </ControlsContainer>
        {role !== "none" &&
          <ControlsContainer>
            { role !== "Commerce" && ((role === "User" && allowed === role) ? 
                <BtnEditUser />
              : !liked ? <BtnFavorite src="/img/Favorite.svg" alt="Favorite icon" onClick={() => {setLiked(true)}}/> 
              : <BtnFavorite src="/img/Favorite-clicked.svg" alt="Favorite icon" onClick={() => setLiked(false)}/>)
            }
            {(role === "Commerce" && allowed === role) && <BtnEditCommerce />}
            {allowed === role && <BtnDeactivate />}
          </ControlsContainer>
        }
      </div>
      <img src="/img/commerce-delimiter.png" alt="delimiter" css={delimiterStyle} />
    </Container>
  );
};

export default CommerceUserSection;
