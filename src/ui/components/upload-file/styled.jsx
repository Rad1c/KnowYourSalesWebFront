import styled from "@emotion/styled";

const FileInput = styled.input`
  width: 100%;
  display: none;
`;

const FileButton = styled.button`
  position: absolute;
  top: .8rem;
  right: 1rem;

  background-color: #fafafa;
  color: #999;
  font-size: 2.6rem;
  border: none;
  cursor: pointer;
  :hover {
    color: #333;
  }
`;

export { FileInput, FileButton }