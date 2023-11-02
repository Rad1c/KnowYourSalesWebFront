/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { FileInputContainer, ImageContainer, FileText, FileImage, FileInput, FileButton, HelperText } from "./styled";
import { useState } from 'react';

const FileUploadField = ({ label, commerceLogo, mb, uploadedFile }) => {
  const [sizeError, setSizeError] = useState("");
  const [fileImage, setFileImage] = useState("");

  useEffect(() => {
    if (commerceLogo) setFileImage(commerceLogo)
  }, [])

  const inputFile = useRef(null);

  const handleFileChange = (event) => {
    if(event.target.files[0].size > 5_242_880) {
      setSizeError(true);
    } else {
      setSizeError(false)
      const file = event.target.files[0];
      if(file){
        const reader = new FileReader();
        reader.onload = () => {
          setFileImage(reader.result)
          commerceLogo ? 
          uploadedFile(reader.result) :
          uploadedFile({
            image: reader.result, 
            isThumbnail: label === "Naslovna slika" ? true : false
          });
        }
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <FileInputContainer style={{ marginBottom: mb }}>
      <ImageContainer>
        {!fileImage && <FileText>
          {`${label}(do 5 MB velicine) ${label === "Naslovna slika" ? "*" : ""}`}
          {sizeError && <HelperText>Velicina fajla je iznad 5 MB</HelperText>}
        </FileText>}
        {fileImage && <FileImage src={fileImage} alt="Article image" />}
      </ImageContainer>
      <FileInput
        accept="image/*"
        readOnly
        hidden
        type="file"
        onChange={handleFileChange}
        ref={inputFile}
      />
      <FileButton type='button' onClick={() => inputFile.current.click()}>Dodaj</FileButton>
    </FileInputContainer>
  );
}

export default FileUploadField;