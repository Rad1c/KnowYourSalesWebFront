/* eslint-disable react/prop-types */
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
  RowContainer,
  BtnSaveStyle,
} from "./styled";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MapElement from "../../map";
import useProductsStore from "../../../../store/productsStore";
import useCommerceStore from "../../../../store/commerceStore";
import { validationAddShopSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddShop = ({ setIsModalOpen }) => {
  const [open, setOpen] = useState(false); // for backdrop
  const [selectedCity, setSelectedCity] = useState("");
  const [city, setCity] = useState("")
  const [cityPosition, setCityPosition] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null);
  const { cities, getCitiesByCountryCode } = useProductsStore();
  const { addShop } = useCommerceStore();
  
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

  const marker = markerPosition => setMarkerPosition(markerPosition);

  const selectOnChange = (event) => {
    setSelectedCity(event.target.value);
    setMarkerPosition(null);
    cities.map(city => {
      if(city.cityId === event.target.value) {
        setCity(city.cityName)
        setCityPosition([city.latitude, city.longitude])
        return [city.latitude, city.longitude]
      }
      else return "none"
    })
  }

  const submitForm = async (data) => {
    const {
      shopName,
      shopCity,
      shopAddress,
    } = data;

    try {
      setOpen(true);
      await addShop(
        shopName,
        shopCity,
        markerPosition.lng,
        markerPosition.lat,
        shopAddress,
      )
      setOpen(false);
      setIsModalOpen(false);
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
              <InputLabel id="citySelectLabel">Sjedište radnje *</InputLabel>
              <Select
                labelId="citySelectLabel"
                id="citySelect"
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
                onChange={selectOnChange}
                >
                {cities.map(city => (
                  <MenuItem key={city.cityId} value={city.cityId} >{city.cityName}</MenuItem>))
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
            {
              city === "Sarajevo" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Banja Luka" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Tuzla" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Istočno Sarajevo" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Mostar" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Bijeljina" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Brčko" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Zenica" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Trebinje" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Doboj" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Zvornik" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Foča" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Prijedor" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Bihać" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
            {
              city === "Višegrad" && <MapElement cityPosition={cityPosition} marker={marker}/>
            }
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
