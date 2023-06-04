import { css } from "@emotion/react";
import styled from "@emotion/styled";

const cardStyles = css`
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Stilovi za sliku
const imageStyles = css`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

// Stilovi za opis
const descriptionStyles = css`
  margin-top: 10px;
`;

const Description = styled.div``;

const CommerceImageContainer = styled.div`
  display: flex;
  padding-top: 5px;
  aling-items: center;
  height: 25px;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 12px;
`;

const ProductName = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: #777777;
  line-height: 1.2;
  margin-bottom: 7px;
`;

const ProductLocationAndTime = styled.p`
  font-size: 15px;
  color: #777777;
  margin-bottom: 5px;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  color: red;
  margin-top: 5px;
`;

const NewPrice = styled.p`
  font-weight: bold;
  margin-top: -2px;
  font-size: 18px;
`;

export {
  descriptionStyles,
  imageStyles,
  cardStyles,
  CommerceImageContainer,
  ProductName,
  ProductLocationAndTime,
  OldPrice,
  NewPrice,
};
