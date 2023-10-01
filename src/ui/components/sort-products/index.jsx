import {
  Autocomplete,
  TextField,
  NativeSelect,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SortContainer } from "./styled";
import { useState, useEffect } from "react";
import useProductsStore from "../../../store/productsStore";

const SortProducts = () => {
  const [cityValue, setCityValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
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
    cityId: city.cityId,
    label: city.cityName,
  }));

  const categoriesMap = categories.map((category) => ({
    categoryId: category.id,
    label: category.name,
  }));

  return (
    <SortContainer>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Autocomplete
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
        />
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <label>Sortiraj po</label>
        <FormControl sx={{ width: "200px" }}>
          <NativeSelect
            defaultValue={3}
            inputProps={{
              name: "Sort",
              id: "sort-by",
            }}
          >
            <option value={1}>Stara cijena</option>
            <option value={2}>Nova cijena</option>
            <option value={3}>Popust</option>
            <option value={4}>Datum objave</option>
            <option value={5}>Datum trajanja</option>
          </NativeSelect>
        </FormControl>

        <InputLabel variant="standard">Prikaži</InputLabel>
        <FormControl sx={{ width: "80px" }}>
          <NativeSelect
            defaultValue={48}
            inputProps={{
              name: "show",
              id: "show",
            }}
          >
            <option value={16}>16</option>
            <option value={24}>24</option>
            <option value={32}>32</option>
          </NativeSelect>
        </FormControl>
        <InputLabel variant="standard">po strani</InputLabel>
      </div>
    </SortContainer>
  );
};

export default SortProducts;
