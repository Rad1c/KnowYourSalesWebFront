import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  background-image: url("/img/wavy.png");
  background-color: #55347f;
  --mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 90deg, #0000 91deg) 50% / 30px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  text-align: center;
  padding-top: 12px;
  padding-bottom: 15px;
`;

const Content = styled.div`
  background-color: #fff5f5;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
  border: #fff5f5 solid;
  border-radius: 14px;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { Container, ContentWrapper, Content };
