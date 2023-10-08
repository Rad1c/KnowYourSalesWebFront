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

  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const NameHolder = styled.p`
  margin-top: 5rem;
  color: #555;
  font-size: 2.4rem;
  font-weight: bold;
`;

const Image = styled.img`
  margin-top: 2rem;
`;

export { Container, NameHolder, Image };
