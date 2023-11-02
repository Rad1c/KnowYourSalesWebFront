import styled from "@emotion/styled";

const FileInputContainer = styled.div`
  width: 8rem;
  height: 9.2rem;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  :hover {
    border: 1px solid black;
  }
`;

const ImageContainer = styled.div`
  width: 8rem;
  height: 7rem;
  border-bottom: 1px dashed #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border-bottom: 1px dashed black;
  }
`;

const FileText = styled.div`
  color: #777;
  text-align: center;
`;

const FileImage = styled.img`
  width: 8rem;
  height: 7rem;

`;

const FileInput = styled.input`
  width: 100%;
`;

const FileButton = styled.button`
  height: 2.2rem;
  background-color: #fafafa;
  color: #777;
  font-size: 1.2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: #333;
  }
`;

const HelperText = styled.div`
  color: #d32f2f;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: center;
`;

export { FileInputContainer, ImageContainer, FileText, FileImage, FileInput, FileButton, HelperText }