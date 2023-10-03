import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SelectContainer = styled.div`
  width: 30rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  position: relative;
  `;

const ArrowDown = styled.div`
  rotate: 90deg;
  color: white;
  font-size: 4rem;
  position: absolute;
  right: 3%;
`;
  
  const SelectStyle = css`
  width: 30rem;
  padding: .5rem;
  font-size: 2.6rem;
  cursor: pointer;
  background-color: rgba(59, 37, 89, 0.8);
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  appearance: none;
`;

const SelectLabel = css`
  font-size: 2rem;
`;

export { SelectStyle, SelectLabel, SelectContainer, ArrowDown };
