import styled from "@emotion/styled";

const NotFoundImgPath = "img/not-found.png";

const ErrorPageContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const ErrorDiv = styled.div`
  margin-top: -100px;
  width: 300px;
  height: 300px;
  background-image: url(${NotFoundImgPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ErrorText = styled.p`
  text-transform: uppercase;
  font-size: 3rem;
  color: #3eb8ea;
  latter-spacing: 1px;
  line-height: 90px;
`;

export { ErrorPageContainer, ErrorDiv, ErrorText };
