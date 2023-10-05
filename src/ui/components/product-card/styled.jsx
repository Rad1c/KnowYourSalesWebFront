/* eslint-disable react-refresh/only-export-components */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const cardStyles = css`
  position: relative;
  width: 25rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  cursor: pointer;
`;

const imageStyles = css`
  width: 100%;
  height: auto;
  z-index: 1;
  border-radius: 4px;
`;

const descriptionStyles = css`
  margin-top: 1rem;
`;

const CommerceImageContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  aling-items: center;
  padding-top: .5rem;
  margin-bottom: 1.2rem;
  display: flex;
  justify-content: space-around;
`;

const ProductName = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: #555;
  line-height: 1.2;
  margin-bottom: .7rem;
`;

const ProductLocationAndTime = styled.p`
  font-size: 2rem;
  color: #555;
  margin-bottom: .5rem;
`;

const OldPrice = styled.p`
  color: #777;
  font-size: 1.8rem;
  margin-top: 2rem;
  text-decoration: line-through;
`;

const NewPrice = styled.p`
  font-weight: bold;
  margin-top: -.2rem;
  font-size: 3.2rem;
  color: #54357f;
  margin-bottom: 2rem;
`;

const Discount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: #54357f;
  color: #fafafa;
  padding: .5rem;
  height: 5rem;
  --mask: conic-gradient(
      from -42.5deg at bottom,
      #0000,
      #000 1deg 84deg,
      #0000 85deg
    )
    50%/27.49px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const Description = styled.div`
  margin-top: -2.2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #efebf3;
  --mask: conic-gradient(
      from 135deg at top,
      #0000,
      #000 1deg 89deg,
      #0000 90deg
    )
    50%/30px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

export {
  descriptionStyles,
  Description,
  imageStyles,
  cardStyles,
  CommerceImageContainer,
  ProductName,
  ProductLocationAndTime,
  OldPrice,
  NewPrice,
  Discount,
};
