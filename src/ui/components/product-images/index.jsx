import { Box } from "@mui/material";
import {
  Container,
  ImgMainContainer,
  ImgSecondContainer,
  ImgsSecondWrapper,
  Arrow,
  ControlsHolder,
  MainImg,
} from "./styled";
import { useState } from "react";

const productsImages = [
  {
    img: "/img/product1.png",
  },
  {
    img: "/img/product.png",
  },
  {
    img: "/img/product1.png",
  },
  {
    img: "/img/product.png",
  },
  {
    img: "/img/product1.png",
  },
];

const ProductImages = () => {
  const [mainImgIndexValue, setMainImgIndexValue] = useState(0);

  const ArrowLeftClickHandler = () => {
    if (mainImgIndexValue === 0) {
      setMainImgIndexValue(productsImages.length - 1);
    } else {
      setMainImgIndexValue(mainImgIndexValue + 1);
    }
  };

  const ArrowRightClickHandler = () => {
    setMainImgIndexValue(mainImgIndexValue + 1);
  };

  return (
    <Container>
      <ControlsHolder>
        <Arrow style={{backgroundImage: `url("/img/expand-left.png")`}} onClick={ArrowLeftClickHandler} />
        <ImgMainContainer>
          <MainImg
            src={productsImages[mainImgIndexValue % productsImages.length].img}
            alt="commerce-img"
          />
        </ImgMainContainer>
        <Arrow style={{backgroundImage: `url("/img/expand-right.png")`}} onClick={ArrowRightClickHandler} />
      </ControlsHolder>
      <Box>
        <ImgsSecondWrapper>
          {productsImages.map((productImage, index) => (
            <ImgSecondContainer key={index}>
              <img
                src={productImage.img}
                alt="commerce-img"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </ImgSecondContainer>
          ))}
        </ImgsSecondWrapper>
      </Box>
    </Container>
  );
};

export default ProductImages;
