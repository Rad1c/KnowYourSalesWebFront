import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  background: #543480 url("/img/wavy.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.h1`
  font-size: 5rem;
  color: white;
`

const FourOFour = styled.span`
  color: white;
  font-size: 10rem;
` 

export { Container, FourOFour, Text };
