import styled from "@emotion/styled";

const Container = styled.div`
  height: 35rem;
  width: 23rem;
  background-color: #fafafa;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ContentContainer = styled.div`
  height: 35%;
  background-color: #eeebf2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CityHolder = styled.p`
  color: #777;
  font-size: 1.8rem;
  text-align: center;
  text-transform: capitalize;
`;

const AddressHolder = styled.p`
  font-size: 2rem;
  color: #555;
  text-align: center;
  text-transform: capitalize;
`;

export { ContentContainer, CityHolder, AddressHolder, Container };
