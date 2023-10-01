import { css } from "@emotion/react";
import styled from "@emotion/styled";

const cardStyles = css`
  position: relative;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const imageStyles = css`
  z-index: 1;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const descriptionStyles = css`
  margin-top: 10px;
`;

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
  font-size: 16px;
  color: #777777;
  font-weight: bold;
  margin-bottom: 5px;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  color: red;
  color: #777777;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const NewPrice = styled.p`
  font-weight: bold;
  margin-top: -2px;
  font-size: 26px;
  color: #54357f;
  margin-bottom: 20px;
`;

const Discount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 18px;
  font-weight: bold;
  background-color: #54357f;
  color: #fafafa;
  padding: 5px;
  height: 50px;
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
  margin-top: -22px;
  padding-top: 20px;
  padding-bottom: 10px;
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
