/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { 
  Button, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  TextField 
} from "@mui/material";
import {
  Container,
  RowContainer,
  BtnRegisterStyle,
  ControlsContainer,
  UploadContainer,
  InputContainer,
  Header,
  Wrapper,
} from "./styled";
import { useEffect, useState } from "react";
import { validationCommerceUpdateSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAccountStore from "../../../../store/accountStore";
import useAuthStore from "../../../../store/authStore";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import FileUploadField from "../../upload-file";
  
const CommerceUpdate = ({ setIsModalOpen, commerce }) => {
  const { updateCommerce } = useAccountStore();
  const { cities, getCitiesByCountryCode } = useAuthStore();
  const [cityId, setCityId] = useState("");
  const [logo, setLogo] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      await getCitiesByCountryCode("BA");
    };
    
    fetchCities();
  }, []);

  useEffect(() => {
    cities.map(city => {
      if(city.cityName === commerce.city) setCityId(city.cityId)
    })
  }, [cities])
  
  const uploadingFile = uploadedFile => {
    setLogo(uploadedFile);
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationCommerceUpdateSchema),
  });
  
  const submitForm = async (data) => {
    const { name } = data;

    try {
      setOpen(true);
      await updateCommerce(name, cityId, logo);
      setOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      setOpen(false);
    }
  };
  
  return (
    <Wrapper>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <Header>
          <h2>Uredite podatke</h2>
        </Header>
        <form onSubmit={handleSubmit(submitForm)}>
          <ControlsContainer>
            <UploadContainer>
              <FileUploadField label={"Logo"} commerceLogo={commerce.logo} mb={"2.3rem"} uploadedFile={uploadingFile}/>
            </UploadContainer>
            <InputContainer>
              <TextField
                id="txtName"
                label="Naziv trgovine *"
                variant="outlined"
                defaultValue={commerce.name}
                {...register("name")}
                error={Boolean(errors.firstName)}
                helperText={errors?.firstName?.message}
                sx={{ backgroundColor: "#fafafa", width: "100%", marginBottom: "2.3rem" }}
                />
              <FormControl sx={{width: "100%"}}>
                <InputLabel id="lblCity">Sjedište trgovine *</InputLabel>
                <Select
                  labelId="lblCity"
                  id="selectCity"
                  value={cityId}
                  label="Sjedište trgovine *"
                  sx={{ width: "100%", marginBottom: "2.3rem" }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                  onChange={(event) => setCityId(event.target.value) }
                  >
                  {cities.map(city => (
                    <MenuItem key={city.cityId} value={city.cityId}>{city.cityName}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </InputContainer>
          </ControlsContainer>
            <RowContainer style={{justifyContent: "end", marginRight: "3rem"}}>
              <Button variant="outlined" css={BtnRegisterStyle} type="submit">
                Sačuvaj
              </Button>
            </RowContainer>
        </form>
      </Container>
    </Wrapper>
  );
};
  
export default CommerceUpdate;