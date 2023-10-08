import { Autocomplete, Button, Link, TextField } from "@mui/material";
import {
  Container,
  RowContainer,
  BtnRegisterStyle,
  ControlsContainer,
  Header,
  Wrapper,
} from "./styled";
import useAuthStore from "../../../../store/authStore";
import { useEffect } from "react";
import { useState } from "react";
import { validationCommerceRegisterSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const CommerceRegistration = () => {
  const { cities, getCitiesByCountryCode } = useAuthStore();
  const [citiesLoaded, setCitiesLoaded] = useState(false);
  const [cityValue, setCityValue] = useState();
  const { registerCommerce } = useAuthStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      await getCitiesByCountryCode("BA");
      setCitiesLoaded(true);
    };

    fetchCities();
  }, []);

  const citiesMap = cities.map((city) => ({
    cityId: city.cityId,
    label: city.cityName,
  }));

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationCommerceRegisterSchema),
  });

  const submitForm = async (data) => {
    try {
      setOpen(true);
      await registerCommerce(
        data?.name,
        cityValue?.cityId,
        data?.email,
        data?.password,
        data.confirmPassword
      );
      setOpen(false);
      navigate("/");
    } catch (error) {
      setOpen(false);
      if (error.response?.status === 409) {
        if (error?.response?.data?.errors[0] == "Commerce.AlreadyExist")
          setError("name", {
            type: "custom",
            message: "trgovina sa tim imenom vec postoji",
          });
        else setError("email", { type: "custom", message: "Email je zauzet" });
      }
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
      <form onSubmit={handleSubmit(submitForm)}>
        <Container>
          <Header>
            <h2>Unesite podatke</h2>
          </Header>
          <ControlsContainer>
            <TextField
              id="txtName"
              label="Naziv trgovine"
              sx={{ marginBottom: "2.5rem" }}
              required
              {...register("name")}
              error={Boolean(errors?.name)}
              helperText={errors?.name?.message}
            />
            {citiesLoaded && (
              <Autocomplete
                disablePortal
                id="txtCity"
                options={citiesMap}
                sx={{ marginBottom: "2.5rem" }}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={(_, value) => {
                  setCityValue(value);
                }}
                renderInput={(params) => (
                  <TextField required {...params} label="Sjedište trgovine" />
                )}
              />
            )}

            <TextField
              id="txtEmail"
              label="Email"
              sx={{ marginBottom: "2.5rem", backgroundColor: "#fafafa" }}
              {...register("email")}
              error={Boolean(errors?.email)}
              helperText={errors?.email?.message}
              required
            />
            <TextField
              label="Lozinka"
              type="password"
              sx={{ marginBottom: "2.5rem" }}
              required
              {...register("password")}
              error={Boolean(errors?.password)}
              helperText={errors?.password?.message}
            />
            <TextField
              label="Ponovi lozinku"
              type="password"
              sx={{ marginBottom: "2.5rem" }}
              required
              {...register("confirmPassword")}
              error={Boolean(errors?.confirmPassword)}
              helperText={errors?.confirmPassword?.message}
            />
            <RowContainer>
              <Link href="/" sx={{ fontSize: "1rem" }}>
                Već imate nalog?
              </Link>
              <Button variant="outlined" css={BtnRegisterStyle} type="submit">
                Registrujte se
              </Button>
            </RowContainer>
          </ControlsContainer>
        </Container>
      </form>
    </Wrapper>
  );
};

export default CommerceRegistration;
