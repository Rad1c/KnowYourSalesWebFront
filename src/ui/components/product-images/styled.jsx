import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgMainContainer = styled.div`
  width: 300px;
  margin-top: 20px;
  height: 220px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

const ImgSecondContainer = styled.div`
  width: 60px;
  margin-top: 20px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgsSecondWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ArrowLeft = styled.div`
  background-image: url("/img/expand-left.png");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const ArrowRight = styled.div`
  background-image: url("/img/expand-right.png");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const ControlsHolder = styled.div`
  display: flex;
  align-items: center;
`;

export {
  Container,
  ImgMainContainer,
  ImgSecondContainer,
  ImgsSecondWrapper,
  ArrowLeft,
  ArrowRight,
  ControlsHolder,
  MainImg,
};
