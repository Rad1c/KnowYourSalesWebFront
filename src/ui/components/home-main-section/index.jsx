/** @jsxImportSource @emotion/react */
import { MainSectionContainer, TextContainer, SelectContainer, BtnSearch } from "./styled";
import { MaskDiv } from "../common/styled";
import { useEffect } from "react";
import Menu from "../menu";
import SelectOption from "../select";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useProductsStore from "../../../store/productsStore";

const MainSection = () => {
  const { cities, getCitiesByCountryCode, categories, getCategories } = useProductsStore();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [btnSearchEnabled, setBtnSearchEnabled] = useState(false);

  useEffect(() => {
    const fetchCitiesAndCategories = async () => {
      await getCitiesByCountryCode("BA");
      await getCategories();
    };

    fetchCitiesAndCategories();
  }, []);

  const citiesMap = cities.map((city) => ({
    id: city.cityId,
    name: city.cityName,
  }));

  const categoriesMap = categories.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  const handleCityChange = (cityId) => {
    setSelectedCity(cityId);

    if (selectedCategory) setBtnSearchEnabled(true);
  };

  const HandleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);

    if (selectedCity) setBtnSearchEnabled(true);
  };

  const handleBtnSearch = () => {
    if (btnSearchEnabled) {
      navigate(`/products?city=${selectedCity}&category=${selectedCategory}`);
    }
  };
  return (
    <MaskDiv>
      <MainSectionContainer id="main-section">
        <Menu />
        <TextContainer>
          <h1 style={{ fontSize: "6.4rem" }}>
            Uštedite novac
            <br /> Pronađite najbolje popuste
          </h1>
          <p
            style={{
              fontSize: "clamp(3.6rem, 1rem + 1vw, 50px)",
              marginTop: "4.5rem",
            }}
          >
            Pronađite najbolje i najnovije popuste u radnjama iz vašeg grada <br /> i uštedite sa
            nama.
          </p>
        </TextContainer>
        <SelectContainer>
          <SelectOption
            name="Odaberite grad"
            data={citiesMap}
            returnSelectValue={handleCityChange}
          />
          <SelectOption
            name="Odaberite kategoriju"
            data={categoriesMap}
            returnSelectValue={HandleCategoryChange}
          />
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            disabled={!btnSearchEnabled}
            css={BtnSearch}
            onClick={handleBtnSearch}
          >
            Započnite pretragu
          </Button>
        </SelectContainer>
      </MainSectionContainer>
    </MaskDiv>
  );
};

export default MainSection;
