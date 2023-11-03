/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Name,
  Container,
  ImgContainer,
  BtnContainer,
  BtnEdit,
  BtnFavorite,
  ControlsContainer,
  ModalContainer,
  Delimiter,
} from "./styled";
import { Modal } from "@mui/material";
import UserUpdate from "../modals/user-update";
import CommerceUpdate from "../modals/commerce-update";

const CommerceUserSection = ({ name, img, role, user, allowed }) => {
  const [liked, setLiked] = useState(false);
  const [openUserUpdate, setOpeUserUpdate] = useState(false);
  const [openCommerceUpdate, setOpenCommerceUpdate] = useState(false);

  return (
    <Container>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "1.6rem" }}>
        <ControlsContainer>
          <ImgContainer>
            <img src={img} alt="commerce-img" style={{ height: `${role === "User" ? "4.5rem" : "3rem"}` }} />
          </ImgContainer>
          <Name>{name}</Name>
        </ControlsContainer>
        {role !== "none" && 
          <ControlsContainer>
            {role !== "Commerce" && ((role === "User" && allowed === role) ? 
                <BtnContainer style={{backgroundColor: "#7F3551"}}>
                  <BtnEdit src="/img/edit.svg" alt="Button for user editing" onClick={() => setOpeUserUpdate(true)}/>
                  <Modal open={openUserUpdate} onClose={() => setOpeUserUpdate(false)} disableAutoFocus 
                    style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <ModalContainer>
                      <UserUpdate setIsModalOpen={isModalOpen => setOpeUserUpdate(isModalOpen)} user={user} />
                    </ModalContainer>
                  </Modal>
                </BtnContainer>
              : !liked ? <BtnFavorite src="/img/Favorite.svg" alt="Favorite icon" onClick={() => {setLiked(true)}}/> 
              : <BtnFavorite src="/img/Favorite-clicked.svg" alt="Favorite icon" onClick={() => setLiked(false)}/>)
            }
            {(role === "Commerce" && allowed === role) && 
              <BtnContainer style={{backgroundColor: "#357F54"}}>
                <BtnEdit src="/img/edit.svg" alt="Button for user editing" onClick={() => setOpenCommerceUpdate(true)}/>
                <Modal open={openCommerceUpdate} onClose={() => setOpenCommerceUpdate(false)} disableAutoFocus 
                    style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <ModalContainer>
                      <CommerceUpdate setIsModalOpen={isModalOpen => setOpenCommerceUpdate(isModalOpen)} commerce={user} />
                    </ModalContainer>
                  </Modal>
              </BtnContainer>}
            {allowed === role && 
              <BtnContainer style={{backgroundColor: "#eeebf2"}}>
                <BtnEdit src="/img/deactivate.svg" alt="Button for user editing"/>
              </BtnContainer>}
          </ControlsContainer>
        }
      </div>
      <Delimiter src="/img/commerce-delimiter.png" alt="delimiter" />
    </Container>
  );
};

export default CommerceUserSection;
