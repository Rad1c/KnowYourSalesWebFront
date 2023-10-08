import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: .5rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #cccccc;
`;
const OldPriceHolder = styled.p`
  margin-top: 1rem;
  font-size: 2.4rem;
  line-height: 1.2;
  color: #ccc;
  text-decoration: line-through;
`;

const NewPriceHolder = styled.p`
  font-size: 4rem;
  color: #54357f;
  font-weight: bold;
  line-height: 1.2;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DicountContainer = styled.div`
  width: 6rem;
  text-align: center;
  background-color: #54357f;
  --mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 50%/30px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  border-bottom: 1px solid #fafafa;
`;

const DicountTitle = styled.p`
  margin-top: .5rem;
  color: #fafafa;
`;

const Discount = styled.p`
  margin: 1.5rem .5rem 2.5rem .5rem;
  font-size: 2.2rem;
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
