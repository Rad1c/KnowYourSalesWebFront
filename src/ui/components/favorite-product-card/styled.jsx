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
  width: 20%;
  border-radius: 2px;
`;

const ContentContainer = styled.div`
  width: 55%;
  padding: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div`
  color: #333;
  font-size: 1.2rem;
`;

const Date = styled.div`
  color: #555;  
  font-weight: bold;
`;

const PriceContainer = styled.div`
  width: 20%;
  color: #7F3551;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { 
  Container,
  ImageContainer,
  ContentContainer,
  Name,
  Date,
  PriceContainer,
}