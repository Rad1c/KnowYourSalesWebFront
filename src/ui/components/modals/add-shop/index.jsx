import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  Wrapper,
  Container,
  Header,
  ControlsContainer,
  MapContainerWrapper,
  HelperText,
  RowContainer,
  BtnSaveStyle,
} from "./styled";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useProductsStore from "../../../../store/productsStore";
import useCommerceStore from "../../../../store/commerceStore";
import { validationAddShopSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddShop = () => {
  const [open, setOpen] = useState(false); // for backdrop
  const [selectedCity, setSelectedCity] = useState("");
  const [markerPosition, setMarkerPosition] = useState(null);
  const { cities, getCitiesByCountryCode } = useProductsStore();
  const { addShop } = useCommerceStore();
  // const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCities = async () => {
      await getCitiesByCountryCode("BA");
    };

    fetchCities();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationAddShopSchema),
  });
  
  const citiesMap = cities.map((city) => ({
    id: city.cityId,
    name: city.cityName,
  }));
  
  function AddMarkerOnClick() {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
      },
    });

    return null;
  }

  const submitForm = async (data) => {
    const {
      shopName,
      shopCity,
      shopAddress,
    } = data;

    console.log(shopName, shopCity, shopAddress)

    try {
      setOpen(true);
      await addShop(
        shopName,
        shopCity,
        shopAddress,
        markerPosition.lat,
        markerPosition.lng,
      )
      setOpen(false);
    } catch (error) {
      setOpen(false)
    }
  };

  return (
    <Wrapper>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <Header>
          <h2>Dodajte radnju</h2>
        </Header>
        <form onSubmit={handleSubmit(submitForm)}>
          <ControlsContainer>
            <TextField
              id="txtName"
              label="Ime radnje"
              variant="outlined"
              required
              {...register("shopName")}
              error={Boolean(errors.shopName)}
              helperText={errors?.shopName?.message}
              sx={{ marginBottom: "2.5rem" }}
            />
            <FormControl fullWidth>
              <InputLabel id="city-select-label">Sjedište radnje *</InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                value={selectedCity}
                label="Sjedište radnje"
                variant="outlined"
                required
                {...register("shopCity")}
                error={Boolean(errors.shopCity)}
                helperText={errors?.shopCity?.message}
                sx={{ marginBottom: "2.5rem" }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
                onChange={(event) => {
                  setSelectedCity(event.target.value);
                }}
                >
                {citiesMap.map(city => (
                  <MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>))
                }
              </Select>
            </FormControl>
            <TextField
              id="txtAddress"
              label="Adresa radnje"
              variant="outlined"
              required
              {...register("shopAddress")}
              error={Boolean(errors.shopAddress)}
              helperText={errors?.shopAddress?.message}
              sx={{ marginBottom: "2.5rem" }}
            />
            <MapContainerWrapper>
              <MapContainer
                center={[44.77085, 17.19096]}
                zoom={13}
                scrollWheelZoom
                style={{ height: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markerPosition && (
                  <Marker position={markerPosition}>
                    <Popup>
                      Latitude: {markerPosition.lat.toFixed(5)} 
                      Longitude: {markerPosition.lng.toFixed(5)}
                    </Popup>
                  </Marker>
                )}
                <AddMarkerOnClick />
              </MapContainer>
            </MapContainerWrapper>
            {!markerPosition && <HelperText>Lokacija na mapi je obavezna</HelperText>}
            <RowContainer style={{justifyContent: "flex-end"}}>
              <Button variant="outlined" css={BtnSaveStyle} type="submit" 
                style={{ backgroundColor: `${(!markerPosition) ? "#ccc" : "#357F54" }` }} disabled={!markerPosition}>
                Sačuvaj
              </Button>
            </RowContainer>
          </ControlsContainer>
        </form>
      </Container>
    </Wrapper>
  );
};

export default AddShop;
