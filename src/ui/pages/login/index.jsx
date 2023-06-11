import { Button, TextField } from "@mui/material";
import { Container, Form, BtnLoginStyle, Title } from "./styled";
import { validationLoginSchema } from "../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authStore";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const Login = () => {
  const { login } = useAuthStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
  });

  const submitForm = async (data) => {
    try {
      setOpen(true);
      await login(data.email, data.password);
      setOpen(false);

      navigate("/products");
    } catch (error) {
      console.log("error" + error);
      setOpen(false);
      if (error.response?.status == 400) {
        setError("email", { type: "custom", message: "Provjerite email" });
        setError("password", { type: "custom", message: "Provjerite lozinku" });
      }
    }
  };

  return (
    <Container>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Title>Prijava</Title>
        <TextField
          id="txtEmail"
          label="Email"
          variant="outlined"
          required
          {...register("email")}
          error={Boolean(errors.email)}
          helperText={errors?.email?.message}
          sx={{ marginBottom: "25px" }}
        />
        <TextField
          label="Lozinka"
          type="password"
          required
          sx={{ marginBottom: "25px" }}
          {...register("password")}
          error={Boolean(errors.password)}
          helperText={errors?.password?.message}
        />
        <Button variant="outlined" type="submit" sx={BtnLoginStyle}>
          Prijavite se
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
