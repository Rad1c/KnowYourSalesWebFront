/* eslint-disable react-refresh/only-export-components */
import styled from "@emotion/styled";

const CardContainer = styled.div`
  position: relative;
  width: 25rem;
  height: 42rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
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
  
const ArticleImage = styled.img`
  width: 100%;
  height: 22rem;
  z-index: 1;
`;

const Description = styled.div`
  height: 20rem;
  margin-top: -2.2rem;
  padding-top: 2rem;
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

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CommerceImageContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  aling-items: center;
  display: flex;
  justify-content: space-around;
`;

const CommerceImage = styled.img`
  height: 100%;
  width: 50%%;
`;

const ProductName = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: #555;
  line-height: 1.2;
`;

const OldPrice = styled.p`
  color: #777;
  font-size: 1.8rem;
  text-decoration: line-through;
`;

const NewPrice = styled.p`
  font-weight: bold;
  font-size: 3.2rem;
  color: #54357f;
`;

const ProductLocationAndTime = styled.p`
  font-size: 2rem;
  color: #555;
`;

const FavoriteContainer = styled.div`
  position: absolute;
  top: 45%;
  transform: translate(-50%, 0, 0, 0);
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Favorite = styled.img`
  margin-right: 1rem;
  background-color: white;
  height: 3rem;
  width: 3rem;
  padding: 1rem;
  border-radius: 50%;
`;

export {
  CardContainer,
  Discount,
  ArticleImage,
  Description,
  CommerceImageContainer,
  CommerceImage,
  ProductName,
  OldPrice,
  NewPrice,
  ProductLocationAndTime,
  FavoriteContainer,
  Favorite,
};
