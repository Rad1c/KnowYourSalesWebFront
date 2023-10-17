import { Box } from "@mui/material";
import {
  Container,
  ImgMainContainer,
  ImgSecondaryContainer,
  ImgsSecondWrapper,
  Arrow,
  ControlsHolder,
  MainImg,
  SecondaryImg,
} from "./styled";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
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
          <TransformWrapper initialScale={1} doubleClick={true} smooth>
            <TransformComponent>
              <div style={{cursor: "zoom-in"}}>
                <MainImg
                  src={productsImages[mainImgIndexValue % productsImages.length].img}
                  alt="commerce-img"
                />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </ImgMainContainer>
        <Arrow style={{backgroundImage: `url("/img/expand-right.png")`}} onClick={ArrowRightClickHandler} />
      </ControlsHolder>
      <Box>
        <ImgsSecondWrapper>
          {productsImages.map((productImage, index) => (
            <ImgSecondaryContainer key={index}>
              <SecondaryImg
                src={productImage.img}
                alt="commerce-img"
              />
            </ImgSecondaryContainer>
          ))}
        </ImgsSecondWrapper>
      </Box>
    </Container>
  );
};

export default ProductImages;
