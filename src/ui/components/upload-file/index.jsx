/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { TextField } from '@mui/material'
import { FileInput, FileButton } from "./styled";
import { useState } from 'react';

const FileUploadField = React.forwardRef(({ required, label, mb, uploadedFile }) => {
  const [fileName, setFileName] = useState("");

  const inputFile = useRef(null);

  const handleFileChange = (event) => {
    uploadedFile(event.target.files[0]);
    setFileName(event.target.files[0].name)
  };

  return (
    <div style={{ width: "100%", position: 'relative', marginBottom: mb }}>
      <TextField label={`${label}(do 5 MB velicine)`} variant="outlined" required={required} style={{ width: "100%" }} value={fileName}/>
      <FileInput
        accept="image/*"
        readOnly
        type="file"
        onChange={handleFileChange}
        ref={inputFile}
      />
      <label >
        <FileButton type='button' onClick={() => inputFile.current.click()}>
          +
        </FileButton>
      </label>
    </div>
  );
})

FileUploadField.displayName = 'FileUploadField';

export default FileUploadField;