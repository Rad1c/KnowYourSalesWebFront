import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgMainContainer = styled.div`
  width: 35rem;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SecondaryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`

const ImgSecondaryContainer = styled.div`
  width: 8rem;
  margin-top: 2rem;
  height: 6rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgsSecondWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  background: no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const ControlsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  Container,
  ImgMainContainer,
  ImgSecondaryContainer,
  ImgsSecondWrapper,
  Arrow,
  ControlsHolder,
  MainImg,
  SecondaryImg,
};
