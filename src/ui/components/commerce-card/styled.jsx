import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 20px;
  width: 250px;
  box-sizing: border-box;
  background-color: #eeebf2;
`;

const NameHolder = styled.p`
  margin-top: 50px;
  color: #555555;
  font-size: 24px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  width: 230px;
  height: 150px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;

export { Container, NameHolder, Image, ImageContainer };
