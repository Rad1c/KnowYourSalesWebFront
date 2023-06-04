import * as Yup from "yup";

const validationUserRegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimalni broj karakter je 3")
    .max(25, "Maksimalni broj karaktera je 25")
    .required("Ime je obavezno"),
  lastName: Yup.string()
    .min(3, "Minimalni broj karakter je 3")
    .max(25, "Maksimalni broj karaktera je 25")
    .required("Prezime je obavezno"),
  email: Yup.string().email("Email je neispravan").required("Email je obavezan"),

  password: Yup.string()
    .min(8, "Minimalan broj karaktera j 8")
    .max(15, "Maksimalan broj karaktera je 15")
    .required("Lozinka je obavezna"),

  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Lozinke se ne slazu"),
});

const validationCommerceRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Minimalni broj karakter je 2")
    .max(50, "Maksimalni broj karaktera je 50")
    .required("Ime je obavezno"),

  email: Yup.string().email("Email je neispravan").required("Email je obavezan"),

  password: Yup.string()
    .min(8, "Minimalan broj karaktera j 8")
    .max(15, "Maksimalan broj karaktera je 15")
    .required("Lozinka je obavezna"),

  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Lozinke se ne slazu"),
});

const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email("Email je neispravan").required("Email je obavezan"),

  password: Yup.string()
    .min(8, "Minimalan broj karaktera j 8")
    .max(15, "Maksimalan broj karaktera je 15")
    .required("Lozinka je obavezna"),
});

export { validationUserRegisterSchema, validationCommerceRegisterSchema, validationLoginSchema };
