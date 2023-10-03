/* eslint-disable react/prop-types */
import {
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SortContainer, Underline } from "./styled";
import { useEffect } from "react";
import useProductsStore from "../../../store/productsStore";
import SelectOption from "../select";

const SortProducts = ({primaryColor, secondaryColor}) => {
  const { cities, getCitiesByCountryCode, categories, getCategories } =
    useProductsStore();

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
  

  return (
    <>
      <SortContainer>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <SelectOption name={"Odaberite grad"} data={citiesMap} backgroundColor={"#fafafa"} color={secondaryColor} disabled={true}/>
          <SelectOption name={"Odaberite kategoriju"} data={categoriesMap} backgroundColor={"#fafafa"} color={primaryColor} disabled={true}/>
          {/* <Autocomplete
            disablePortal
            id="txtCity"
            options={citiesMap}
            sx={{ marginBottom: "25px", width: "200px" }}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_, value) => {
              setCityValue(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Grad" variant="standard" />
            )}
          />
          <Autocomplete
            disablePortal
            id="txtCategory"
            options={categoriesMap}
            sx={{ marginBottom: "25px", width: "200px", marginLeft: "25px" }}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_, value) => {
              setCategoryValue(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Kategorija" variant="standard" />
            )}
          /> */}
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <label>Sortiraj po</label>
            <FormControl sx={{ width: "20rem" }}>
              <Select
                defaultValue={3}
                inputProps={{
                  name: "Sort",
                  id: "sort-by",
                }}
                sx={{ maxHeight: "2.4rem" }}
                >
                <option value={1}>Stara cijena</option>
                <option value={2}>Nova cijena</option>
                <option value={3}>Popust</option>
                <option value={4}>Datum objave</option>
                <option value={5}>Datum trajanja</option>
              </Select>
            </FormControl>
            <img src="/img/sort.png" alt="Sorting button" style={{height: "2rem", cursor: "pointer"}} />
          </div>

          <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
            <InputLabel variant="standard">Prikaži</InputLabel>
            <FormControl sx={{ width: "8rem" }}>
              <Select
                defaultValue={24}
                inputProps={{
                  name: "show",
                  id: "show",
                }}
                sx={{ maxHeight: "2.4rem" }}
                >
                <option value={16}>12</option>
                <option value={24}>24</option>
                <option value={32}>36</option>
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
