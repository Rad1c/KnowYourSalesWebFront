import styled from "@emotion/styled";

const Container = styled.div`
  border-top: 1px solid #cccccc;
  margin-top: 5px;
  display: flex;
`;
const OldPriceHolder = styled.p`
  font-size: 27px;
  line-height: 1.2;
  color: #777777;
  text-decoration: line-through;
`;

const NewPriceHolder = styled.p`
  font-size: 32px;
  color: #54357f;
  font-weight: bold;
  line-height: 1.2;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 300px;
`;

const DicountContainer = styled.div`
  max-width: 100px;
  background-color: red;
  text-align: center;
  background-color: #54357f;
  --mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50%/30px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const DicountTitle = styled.p`
  margin-top: 5px;
  color: #fafafa;
`;

const Discount = styled.p`
  margin: 15px 5px 25px 5px;
  font-size: 22px;
  font-weight: bold;
  color: #fafafa;
`;

export {
  OldPriceHolder,
  Container,
  NewPriceHolder,
  PriceContainer,
  DicountContainer,
  DicountTitle,
  Discount,
};
