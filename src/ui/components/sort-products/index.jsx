/* eslint-disable react/prop-types */
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { SortContainer, Underline } from "./styled";
import { useEffect, useState } from "react";
import useProductsStore from "../../../store/productsStore";
import SelectOption from "../select";

const SortProducts = ({ primaryColor, secondaryColor, sortCriteria, pageSizeCriteria }) => {
  const [sort, setSort] = useState("Datum objave");
  const { cities, getCitiesByCountryCode, categories, getCategories } = useProductsStore();
  const [selectedCityId, setSelectedCity] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { getArticles, pageSize, setPageSize } = useProductsStore();

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
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      if (selectedCityId) {
        await getArticles(pageSize, 1, null, selectedCityId, null, null);
      }
    };

    fetchArticles();
  }, [selectedCityId]);

  useEffect(() => {
    const fetchArticles = async () => {
      if (selectedCategoryId) {
        await getArticles(pageSize, 1, null, null, selectedCategoryId, null);
      }
    };

    fetchArticles();
  }, [selectedCategoryId]);

  return (
    <>
      <SortContainer>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <SelectOption
            name={"Odaberite grad"}
            data={citiesMap}
            backgroundColor={"#fafafa"}
            color={secondaryColor}
            disabled={true}
            returnSelectValue={handleCityChange}
          />
          <SelectOption
            name={"Odaberite kategoriju"}
            data={categoriesMap}
            backgroundColor={"#fafafa"}
            color={primaryColor}
            disabled={true}
            returnSelectValue={handleCategoryChange}
          />
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <label>Sortiraj po</label>
            <FormControl sx={{ width: "20rem" }}>
              <Select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  sortCriteria(event.target.value);
                }}
                sx={{ maxHeight: "2.4rem" }}
              >
                <MenuItem key={"Stara cijena"} value={"Stara cijena"}>
                  Stara cijena
                </MenuItem>
                <MenuItem key={"Nova cijena"} value={"Nova cijena"}>
                  Nova cijena
                </MenuItem>
                <MenuItem key={"Popust"} value={"Popust"}>
                  Popust
                </MenuItem>
                <MenuItem key={"Datum objave"} value={"Datum objave"}>
                  Datum objave
                </MenuItem>
                <MenuItem key={"Datum trajanja"} value={"Datum trajanja"}>
                  Datum trajanja
                </MenuItem>
              </Select>
            </FormControl>
            <img
              src="/img/sort.png"
              alt="Sorting button"
              style={{ height: "2rem", cursor: "pointer" }}
            />
          </div>

          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <InputLabel variant="standard">Prikaži</InputLabel>
            <FormControl sx={{ width: "8rem" }}>
              <Select
                value={pageSize}
                onChange={(event) => {
                  setPageSize(event.target.value);
                  pageSizeCriteria(event.target.value);
                }}
                sx={{ maxHeight: "2.4rem" }}
              >
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={36}>36</MenuItem>
              </Select>
            </FormControl>
            <InputLabel variant="standard">po strani</InputLabel>
          </div>
        </div>
      </SortContainer>
      <Underline />
    </>
  );
};

export default SortProducts;
