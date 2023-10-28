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
  ControlsContainer,
  RowContainer,
  BtnSaveStyle,
} from "./styled";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import FileUploadField from "../../upload-file";
import useProductsStore from "../../../../store/productsStore";
import useCommerceStore from "../../../../store/commerceStore";
import { validationAddArticleSchema } from "../../../../validators/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
  
const AddArticle = ({ setIsModalOpen }) => {
  const [open, setOpen] = useState(false); // for backdrop
  const [selectedShop, setSelectedShop] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState([]);
  let selectedShopIds = [];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [files, setFiles] = useState([])
  const { categories, getCategories } = useProductsStore();
  const { shops, getShops } = useCommerceStore();
    
  useEffect(() => {
    const fetchShopsAndCategories = async () => {
      await getCategories();
      await getShops();
    };
  
    fetchShopsAndCategories();
  }, []);

  const uploadingFiles = uploadedFile => {
    setFiles(prevFiles => [...prevFiles, uploadedFile]);
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
    control,
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
  
    console.log(
      articleName,
      description,
      oldPrice,
      newPrice,
      selectedShopId,
      articleCategory,
      files,
    );

    // TODO: POST artikla u bazi, GET id artikla i POST slika u bazi i na supabase
    try {
      setOpen(true);
      // await addArticle()
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
            <ControlsContainer>
              <TextField
                id="txtArticleName"
                label="Ime artikla"
                variant="outlined"
                {...register("articleName")}
                error={Boolean(errors.articleName)}
                helperText={errors?.articleName?.message}
                sx={{ marginBottom: "2.3rem" }}
              />
              <TextField
                id="txtDescription"
                label="Opis"
                variant="outlined"
                {...register("description")}
                error={Boolean(errors.description)}
                helperText={errors?.description?.message}
                sx={{ marginBottom: "2.3rem" }}
                multiline
                minRows={6}
                maxRows={6}
              />
              <RowContainer>
                <TextField
                  id="txtOldPrice"
                  label="Stara cijena(u KM)"
                  variant="outlined"
                  {...register("oldPrice")}
                  error={Boolean(errors.oldPrice)}
                  helperText={errors?.oldPrice?.message}
                  sx={{ width: "48%" }}
                />
                <TextField
                  id="txtNewPrice"
                  label="Nova cijena(u KM)"
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
            </ControlsContainer>
            <ControlsContainer>
              <Controller 
                name="titlePicture"
                control={control}
                render={({ field }) => (
                  <FileUploadField 
                    label={"Naslovna slika"} 
                    required={true} 
                    mb={"2.3rem"} 
                    uploadedFile={uploadingFiles} 
                    {...field}
                  />
                )}
              /> 
              <FileUploadField label={"Slika"} mb={"2.3rem"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} mb={"2.3rem"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} mb={"2.3rem"} uploadedFile={uploadingFiles}/>
              <FileUploadField label={"Slika"} uploadedFile={uploadingFiles}/>
              <RowContainer style={{justifyContent: "flex-end"}}>
                <Button variant="outlined" css={BtnSaveStyle} type="submit" 
                  style={{ backgroundColor: "#357F54" }}
                >
                  Sačuvaj
                </Button>
              </RowContainer>
            </ControlsContainer>
          </FormContainer>
        </form>
      </Container>
    </Wrapper>
  );
};
  
export default AddArticle;
  