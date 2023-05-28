/** @jsxImportSource @emotion/react */
import { MainSectionContainer, TextContainer, SelectContainer, BtnSearch } from "./styled";
import { MaskDiv } from "../common/styled";
import { useState, useEffect } from "react";
import Menu from "../menu";
import SelectOption from "../select";
import { Button } from "@mui/material";

const MainSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const cityArr = [
    { id: 1, name: "Banja Luka" },
    { id: 2, name: "Sarajevo" },
    { id: 3, name: "Zagreb" },
  ];

  const CategoryArr = [
    { id: 1, name: "Telefoni" },
    { id: 2, name: "Automobili" },
  ];

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);
  return (
    <MaskDiv>
      <MainSectionContainer id="main-section">
        <Menu />
        <TextContainer>
          Uštedite novac.
          <br /> Pronađite najbolje popuste
          <p style={{ fontSize: "40px", marginTop: "30px" }}>
            Pronađite najbolje i najnovije popuste u radnjama iz vašeg grada <br /> i uštedite sa
            nama.
          </p>
        </TextContainer>
        <SelectContainer>
          <SelectOption name="Odaberite grad" data={cityArr} />
          <SelectOption name="Odaberite kategoriju" data={CategoryArr} />
          <Button variant="outlined" color="inherit" size="small" css={BtnSearch}>
            Započnite pretragu
          </Button>
        </SelectContainer>
      </MainSectionContainer>
    </MaskDiv>
  );
};

export default MainSection;
