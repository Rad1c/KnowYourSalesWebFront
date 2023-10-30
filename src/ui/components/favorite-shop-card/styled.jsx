import styled from "@emotion/styled";

const Container = styled.div`
  width: 95%;
  height: 6rem;
  background-color: #efebf3;
  margin: .5rem 0;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  :hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 2px;
  padding: 1rem;
  align-self: center;
  justify-self: center;
`;

const ContentContainer = styled.div`
  width: 65%;
  padding: .2rem;
  color: #333;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { 
  Container,
  ImageContainer,
  ContentContainer,
}