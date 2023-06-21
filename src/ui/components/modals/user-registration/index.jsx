import {
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  Container,
  RowContainer,
  BtnRegisterStyle,
  ControlsContainer,
  Header,
  Wrapper,
} from "./styled";
import { useState } from "react";
import { validationUserRegisterSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../../store/authStore";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const currentTime = new Date();

const UserRegistration = () => {
  const [sex, setSex] = useState("M");
  const navigate = useNavigate();
  const { registerUser } = useAuthStore();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationUserRegisterSchema),
  });

  const submitForm = async (data) => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      day,
      month,
      year,
      sex,
    } = data;
    const formattedDay = day.padStart(2, "0");
    const formattedMonth = month.padStart(2, "0");
    const dateOfBirth = `${year}-${formattedMonth}-${formattedDay} 00:00:00`;

    try {
      setOpen(true);
      await registerUser(
        firstName,
        lastName,
        sex,
        email,
        dateOfBirth,
        password,
        confirmPassword
      );
      setOpen(false);
      navigate("/login");
    } catch (error) {
      setOpen(false);
      if (error.response?.status === 409) {
        setError("email", { type: "custom", message: "Email je zauzet" });
      }
    }
  };
  const sexChange = (e) => {
    setSex(e.target.value);
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
          <h2>Unesite podatke</h2>
        </Header>
        <form onSubmit={handleSubmit(submitForm)}>
          <ControlsContainer>
            <RowContainer>
              <TextField
                id="txtFirstName"
                label="Ime"
                variant="outlined"
                required
                {...register("firstName")}
                error={Boolean(errors.firstName)}
                sx={{ backgroundColor: "#fafafa", width: "45%" }}
                helperText={errors?.firstName?.message}
              />
              <TextField
                id="txtLastName"
                label="Prezime"
                variant="outlined"
                required
                {...register("lastName")}
                error={Boolean(errors.lastName)}
                sx={{ width: "45%" }}
                helperText={errors?.lastName?.message}
              />
            </RowContainer>
            <RowContainer>
              <FormControl sx={{ width: "12rem" }}>
                <InputLabel id="lbl-sex">Pol</InputLabel>
                <Select
                  labelId="lbl-sex"
                  id="demo-simple-select"
                  value={sex}
                  required
                  label="Pol"
                  sx={{ width: "80%" }}
                  {...register("sex")}
                  onChange={sexChange}
                >
                  <MenuItem value={"M"}>Muško</MenuItem>
                  <MenuItem value={"F"}>Žensko</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="txtDay"
                label="Dan"
                variant="outlined"
                type="number"
                inputProps={{
                  min: 1,
                  max: 31,
                }}
                required
                {...register("day")}
                sx={{ width: "20%" }}
              />
              <TextField
                id="txtMonth"
                label="Mjesec"
                variant="outlined"
                type="number"
                inputProps={{
                  min: 1,
                  max: 12,
                }}
                required
                {...register("month")}
                sx={{ width: "20%" }}
              />
              <TextField
                id="txtYear"
                label="Godina"
                variant="outlined"
                type="number"
                inputProps={{
                  min: 1900,
                  max: currentTime.getFullYear() - 10,
                }}
                required
                {...register("year")}
                sx={{ width: "20%" }}
              />
            </RowContainer>
            <TextField
              id="txtEmail"
              label="Email"
              variant="outlined"
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={errors?.email?.message}
              sx={{ marginBottom: "2.5rem" }}
              required
            />
            <TextField
              label="Lozinka"
              type="password"
              sx={{ marginBottom: "2.5rem" }}
              required
              {...register("password")}
              error={Boolean(errors.password)}
              helperText={errors?.password?.message}
            />
            <TextField
              label="Ponovi lozinku"
              type="password"
              sx={{ marginBottom: "2.5rem" }}
              required
              {...register("confirmPassword")}
              error={Boolean(errors.confirmPassword)}
              helperText={errors?.confirmPassword?.message}
            />
            <RowContainer>
              <Link href="/login" sx={{ fontSize: "1rem" }}>
                Već imate nalog?
              </Link>
              <Button variant="outlined" css={BtnRegisterStyle} type="submit">
                Registrujte se
              </Button>
            </RowContainer>
          </ControlsContainer>
        </form>
      </Container>
    </Wrapper>
  );
};

export default UserRegistration;
