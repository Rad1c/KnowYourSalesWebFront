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
  Header,
  Wrapper,
} from "./styled";
import { useState } from "react";
import { validationUserUpdateSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAccountStore from "../../../../store/accountStore";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const currentTime = new Date();

const UserUpdate = ({ setIsModalOpen, user }) => {
  const [sex, setSex] = useState(user.sex);
  const { updateUser } = useAccountStore();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationUserUpdateSchema),
  });

  const sexChange = (e) => {
    setSex(e.target.value);
  };

  const submitForm = async (data) => {
    const { firstName, lastName, sex, day, month, year } = data;
    const formattedDay = day.padStart(2, "0");
    const formattedMonth = month.padStart(2, "0");
    const dateOfBirth = `${year}-${formattedMonth}-${formattedDay} 00:00:00`;

    try {
      setOpen(true);
      console.log(user.id, firstName, lastName, sex, dateOfBirth);
      await updateUser(user.id, firstName, lastName, sex, dateOfBirth);
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
            <RowContainer>
              <TextField
                id="txtFirstName"
                label="Ime"
                variant="outlined"
                defaultValue={user.firstName}
                required
                {...register("firstName")}
                error={Boolean(errors.firstName)}
                helperText={errors?.firstName?.message}
                sx={{ backgroundColor: "#fafafa", width: "45%" }}
              />
              <TextField
                id="txtLastName"
                label="Prezime"
                variant="outlined"
                defaultValue={user.lastName}
                required
                {...register("lastName")}
                error={Boolean(errors.lastName)}
                helperText={errors?.lastName?.message}
                sx={{ width: "45%" }}
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
                defaultValue={Number(user.birthDate.slice(8, 10))}
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
                defaultValue={Number(user.birthDate.slice(5, 7))}
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
                defaultValue={Number(user.birthDate.slice(0, 4))}
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
            <RowContainer style={{justifyContent: "end"}}>
              <Button variant="outlined" css={BtnRegisterStyle} type="submit">
                Sačuvaj
              </Button>
            </RowContainer>
          </ControlsContainer>
        </form>
      </Container>
    </Wrapper>
  );
};

export default UserUpdate;