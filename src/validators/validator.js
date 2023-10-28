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

const validationAddShopSchema = Yup.object().shape({
  shopName: Yup.string()
    .min(5, "Minimalni broj karakter je 5")
    .max(50, "Maksimalni broj karaktera je 50")
    .required("Ime je obavezno"),

  shopCity: Yup.string()
    .test("Vrijednost nije izabrana", "Selekcija grada je obavezna",
    value => {
      if(value) return true
      else false
    }),

  shopAddress: Yup.string()
    .min(5, "Minimalni broj karakter je 5")
    .max(50, "Maksimalni broj karaktera je 50")
    .required("Adresa je obavezna"),
})

const validationUpdateShopSchema = Yup.object().shape({
  shopName: Yup.string()
    .min(5, "Minimalni broj karakter je 5")
    .max(50, "Maksimalni broj karaktera je 50")
    .required("Ime je obavezno"),

  shopAddress: Yup.string()
    .min(5, "Minimalni broj karakter je 5")
    .max(50, "Maksimalni broj karaktera je 50")
    .required("Adresa je obavezna"),
})

const validationAddArticleSchema = Yup.object().shape({
  articleName: Yup.string()
    .min(5, "Minimalni broj karakter je 5")
    .max(50, "Maksimalni broj karaktera je 50")
    .required("Ime je obavezno"),
  
  description: Yup.string()
    .min(16, "Minimalni broj karakter je 16")
    .max(160, "Maksimalni broj karaktera je 160")
    .required("Opis je obavezan"),

  oldPrice: Yup.number()
    .min(0, "Cijena artikla mora biti pozitivan broj")  
    .required("Stara cijena je obavezna"),

  newPrice: Yup.number()
    .max(Yup.ref('oldPrice'), "Nova cijena artikla mora biti manja od stare cijene")
    .required("Nova cijena je obavezna"),

  articleShops: Yup.array()
    .required("Obavezno je dodati prodavnice u kojima je artikal dostupan"),

  articleCategory: Yup.string()
    .required("Kategorija artikla je obavezna"),

  titlePicture: Yup.object().shape({
    size: Yup.number()
      .max(5242880, "Maksimalna velicina slike je 5 MB")
  }).required()
})

export { 
  validationUserRegisterSchema, 
  validationCommerceRegisterSchema, 
  validationLoginSchema, 
  validationAddShopSchema, 
  validationUpdateShopSchema,
  validationAddArticleSchema
};
