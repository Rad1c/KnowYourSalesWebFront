import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  gap: 20px;
  min-width: 150px;
  background-color: #eeebf2;
`;

const CityHolder = styled.p`
  font-weight: bold;
  color: #555555;
  text-transform: capitalize;
`;

const AddressHolder = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #555555;
  text-transform: capitalize;
`;

export { CityHolder, AddressHolder, Container };
