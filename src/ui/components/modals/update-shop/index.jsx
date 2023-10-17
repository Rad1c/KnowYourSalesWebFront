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
import { validationUpdateShopSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
  
const UpdateShop = ({ setIsModalOpen, shop }) => {
  const [open, setOpen] = useState(false); // for backdrop
  const [selectedCity, setSelectedCity] = useState("");
  const [city, setCity] = useState("")
  const [cityPosition, setCityPosition] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null);
  const { cities, getCitiesByCountryCode } = useProductsStore();
  const { updateShop, deleteShop } = useCommerceStore();

  useEffect(() => {
    const fetchCities = async () => {
      await getCitiesByCountryCode("BA");
    };

     fetchCities();
     
     setCity(shop.cityName);
     setSelectedCity(shop.cityId);
     setCityPosition([shop.latitude, shop.longitude]);
     setMarkerPosition([shop.latitude, shop.longitude]);
  }, [shop]);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationUpdateShopSchema),
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

  const btnDelete = async () => {
    try {
      setOpen(true);
      await deleteShop(shop.id);
      setOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error deleting", error)
      setOpen(false);
    } 
  }

  const submitForm = async (data) => {
    const {
      shopName,
      shopAddress,
    } = data;
    
    console.log(shop.id, shopName, selectedCity, shopAddress);
    console.log(markerPosition[0], markerPosition[1])
    console.log(markerPosition)

    try {
      setOpen(true);
      await updateShop(
        shop.id,
        shopName ? shopName : null,
        selectedCity ? selectedCity : null,
        markerPosition.lng ? markerPosition.lng : markerPosition[1],
        markerPosition.lat ? markerPosition.lat : markerPosition[0],
        shopAddress ? shopAddress : null,
      )
      setOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error updating", error)
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
          <h2>Ažurirajte radnju</h2>
        </Header>
        <form onSubmit={handleSubmit(submitForm)}>
          <ControlsContainer>
            <Controller
              name="shopName"
              control={control}
              defaultValue={shop.name}
              render={({ field, fieldState }) => (
                <TextField
                  id="txtName"
                  label="Ime radnje"
                  variant="outlined"
                  required
                  {...field}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={{ marginBottom: "2.5rem" }}
                />
              )}
            />
            <FormControl fullWidth>
              <InputLabel id="city-select-label">Sjedište radnje *</InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                label="Sjedište radnje"
                variant="outlined"
                required
                value={selectedCity}
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
                {cities?.map(city => (
                  <MenuItem key={city.cityId} value={city.cityId} >{city.cityName}</MenuItem>))
                }
              </Select>
            </FormControl>
            <Controller 
              name="shopAddress"
              control={control}
              defaultValue={shop.address}
              render={({ field, fieldState }) => (
                <TextField
                  id="shopAddress"
                  label="Adresa radnje"
                  variant="outlined"
                  required
                  {...field}
                  error={Boolean(fieldState.errors)}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={{ marginBottom: "2.5rem" }}
                />
              )}
            />
            {
              city === "Sarajevo" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Banja Luka" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Tuzla" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Istočno Sarajevo" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Mostar" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Bijeljina" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Brčko" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Zenica" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Trebinje" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Doboj" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Zvornik" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Foča" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Prijedor" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Bihać" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            {
              city === "Višegrad" && <MapElement cityPosition={cityPosition} marker={marker} defaultMarkerPosition={markerPosition}/>
            }
            <RowContainer style={{justifyContent: "flex-end"}}>
              <Button variant="outlined" css={BtnSaveStyle} type="button" onClick={btnDelete} 
                style={{ backgroundColor: "#eeebf2", 
                  border: `1px solid ${(!markerPosition) ? "#ccc" : "#d32f2f" }`, color: `${(!markerPosition) ? "#ccc" : "#d32f2f" }`, marginRight: "2rem" }} disabled={!markerPosition}>
                Ukloni
              </Button>
              <Button variant="outlined" css={BtnSaveStyle} type="submit" 
                style={{ backgroundColor: `${(!markerPosition) ? "#ccc" : "#357F54" }` }} disabled={!markerPosition}>
                Ažuriraj
              </Button>
            </RowContainer>
          </ControlsContainer>
        </form>
      </Container>
    </Wrapper>
  );
};

export default UpdateShop;
  