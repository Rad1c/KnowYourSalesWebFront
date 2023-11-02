/* eslint-disable react-hooks/exhaustive-deps */
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
  FormContainer,
  RowContainer,
  BtnSaveStyle,
} from "./styled";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import FileUploadField from "../../upload-file";
import useProductsStore from "../../../../store/productsStore";
import useCommerceStore from "../../../../store/commerceStore";
import extractUserDataFromToken from "../../../../assets/helper"
import { validationAddArticleSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
  
const AddArticle = ({ setIsModalOpen }) => {
  const [open, setOpen] = useState(false); // for backdrop
  const [selectedShop, setSelectedShop] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState([]);
  let selectedShopIds = [];
  const [selectedCategory, setSelectedCategory] = useState("");
  const tomorrowDate = dayjs().add(1, "day");
  tomorrowDate.format("YYYY-MM-DD");
  const [date, setDate] = useState(tomorrowDate);
  const [images, setImages] = useState([])
  const [disabled, setDisabled] = useState(true);
  const { categories, getCategories, addArticle } = useProductsStore();
  const { shops, getShops } = useCommerceStore();
  const token = localStorage.getItem("refresh");
  const { id } = extractUserDataFromToken(token)
    
  useEffect(() => {
    const fetchShopsAndCategories = async () => {
      await getCategories();
      await getShops();
    };
  
    fetchShopsAndCategories();
  }, []);

  const uploadingFiles = uploadedFile => {
    console.log(uploadedFile)
    const { isThumbnail } = uploadedFile;
    isThumbnail ? setDisabled(false) : null;
    setImages(prevFiles => [...prevFiles, uploadedFile]);
  }

  const createIdArray = objectNames => {
    const shopIdMap = shops.reduce((acc, shop) => {
      acc[shop.name] = shop.id;
      return acc;
    }, {})

    // setSelectedShopId se svaki put ponovo gradi
    selectedShopIds = [];
    for (const [key, value] of Object.entries(shopIdMap)) {
      objectNames.map((objectName) => {
        if (objectName == key) 
          selectedShopIds.push(value)
      })
    }

    setSelectedShopId(selectedShopIds);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationAddArticleSchema),
  });
  
  const submitForm = async (data) => {
    const {
      articleName,
      description,
      oldPrice,
      newPrice,
      articleCategory,
    } = data;
  
    const valiDate = date.format().slice(0, 10) + " 00:00:00";

    console.log(
      articleName,
      description,
      oldPrice,
      newPrice,
      selectedShopId,
      [articleCategory],
      valiDate,
      images,
    );

    // TODO: POST artikla u bazu
    try {
      setOpen(true);
      await addArticle(
        id,
        [articleCategory],
        selectedShopId,
        "Konvertibilna marka",
        articleName,
        description,
        oldPrice,
        newPrice,
        valiDate,
        images,
      );
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
          <h2>Dodajte artikal</h2>
        </Header>
        <form onSubmit={handleSubmit(submitForm)}>
          <FormContainer>
            <TextField
              id="txtArticleName"
              label="Ime artikla *"
              variant="outlined"
              {...register("articleName")}
              error={Boolean(errors.articleName)}
              helperText={errors?.articleName?.message}
              sx={{ marginBottom: "2.3rem" }}
            />
            <TextField
              id="txtDescription"
              label="Opis *"
              variant="outlined"
              multiline
              minRows={6}
              maxRows={6}
              {...register("description")}
              error={Boolean(errors.description)}
              helperText={errors?.description?.message}
              sx={{ marginBottom: "2.3rem" }}
            />
            <RowContainer>
              <TextField
                id="txtOldPrice"
                label="Stara cijena(u KM) *"
                variant="outlined"
                {...register("oldPrice")}
                error={Boolean(errors.oldPrice)}
                helperText={errors?.oldPrice?.message}
                sx={{ width: "48%" }}
              />
              <TextField
                id="txtNewPrice"
                label="Nova cijena(u KM) *"
                variant="outlined"
                {...register("newPrice")}
                error={Boolean(errors.newPrice)}
                helperText={errors?.newPrice?.message}
                sx={{ width: "48%" }}
              />
            </RowContainer>
            <RowContainer style={{gap: "4%"}}>
              <FormControl fullWidth >
                <InputLabel id="shopSelectLabel" style={{ maxHeight: "1.4375em" }}>Radnje(dostupnost) *</InputLabel>
                <Select
                  labelId="shopSelectLabel"
                  id="shopSelect"
                  value={selectedShop}
                  label="Radnje(dostupnost)"
                  variant="outlined"
                  multiple
                  renderValue={(selected) => selected.join(', ')}
                  {...register("articleShops")}
                  error={Boolean(errors.articleShops)}
                  helperText={errors?.articleShops?.message}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                  onChange={event => {
                    setSelectedShop(event.target.value)
                    createIdArray(event.target.value)
                  }}
                >
                  {shops.map(shop => (
                    <MenuItem key={shop.id} value={shop.name} >{shop.name}</MenuItem>))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="categorySelectLabel">Kategorija *</InputLabel>
                <Select
                  labelId="categorySelectLabel"
                  id="categorySelect"
                  value={selectedCategory}
                  label="Kategorija"
                  variant="outlined"
                  {...register("articleCategory")}
                  error={Boolean(errors.articleCategory)}
                  helperText={errors?.articleCategory?.message}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                  onChange={(event) => {
                    setSelectedCategory(event.target.value)
                  }}
                >
                  {categories.map(category => (
                    <MenuItem key={category.id} value={category.id} >{category.name}</MenuItem>))
                  }
                </Select>
              </FormControl>
            </RowContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker 
                  label="Datum isteka popusta *" 
                  value={date}
                  minDate={tomorrowDate}
                  onChange={(newValue) => setDate(newValue)}
                  sx={{ width: "100%", marginBottom: "2.3rem" }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <RowContainer>
              <FileUploadField label={"Naslovna slika"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} uploadedFile={uploadingFiles}/>
            </RowContainer>
          </FormContainer>
          <RowContainer style={{justifyContent: "flex-end", marginRight: "3rem"}}>
            <Button 
              variant="outlined" 
              css={BtnSaveStyle} 
              type="submit" 
              disabled={disabled} 
              style={{ backgroundColor: `${(disabled) ? "#ccc" : "#357F54" }` }}
            >
              Sačuvaj
            </Button>
          </RowContainer>
        </form>
      </Container>
    </Wrapper>
  );
};
  
export default AddArticle;
  