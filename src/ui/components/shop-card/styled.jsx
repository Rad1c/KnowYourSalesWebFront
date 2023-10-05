import styled from "@emotion/styled";

const Container = styled.div`
  height: 25rem;
  width: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #eeebf2;
  cursor: pointer;
`;

const ImageHolder = styled.img`
  height: 5.6rem;
  margin-top: 1rem;
`

const CityHolder = styled.p`
  margin-bottom: 1rem;
  color: #555555;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

const AddressHolder = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
  color: #555555;
  text-transform: capitalize;
`;

export { CityHolder, ImageHolder, AddressHolder, Container };
