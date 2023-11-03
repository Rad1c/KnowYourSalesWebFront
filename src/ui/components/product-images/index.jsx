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

const ProductImages = ({ productsImages }) => {
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
        <Arrow
          style={{ backgroundImage: `url("/img/expand-left.png")` }}
          onClick={ArrowLeftClickHandler}
        />
        <ImgMainContainer>
          <TransformWrapper initialScale={1} doubleClick={true} smooth>
            <TransformComponent>
              <div style={{ cursor: "zoom-in" }}>
                {productsImages && (
                  <MainImg
                    src={productsImages[mainImgIndexValue % productsImages.length]}
                    alt="commerce-img"
                  />
                )}
              </div>
            </TransformComponent>
          </TransformWrapper>
        </ImgMainContainer>
        <Arrow
          style={{ backgroundImage: `url("/img/expand-right.png")` }}
          onClick={ArrowRightClickHandler}
        />
      </ControlsHolder>
      <Box>
        <ImgsSecondWrapper>
          {productsImages.map((img, index) => (
            <ImgSecondaryContainer key={index}>
              <SecondaryImg src={img} alt="article-img" />
            </ImgSecondaryContainer>
          ))}
        </ImgsSecondWrapper>
      </Box>
    </Container>
  );
};

export default ProductImages;
