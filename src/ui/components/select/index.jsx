/** @jsxImportSource @emotion/react */
import {
  FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  // rgbToHex,
} from "@mui/material";
// import { SelectStyle, SelectLabel } from "./styled";
import { useState, useEffect } from "react";

const SelectOption = (props) => {
  const { name, data } = props;

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <FormControl>
      {/* <InputLabel id="lbl-select" css={SelectLabel}>
        {name}
      </InputLabel> */}
      <select
        name="select--grad"
        style={{
          width: "30rem",
          height: "5rem",
          fontSize: "2.6rem",
          backgroundColor: "#3b2559",
          opacity: "0.8",
          borderRadius: "5px",
          color: "#fff",
          outline: "none",
        }}
        required
      >
        <option value="">{name}</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {/* <Select
        labelId="lbl-select"
        id="select"
        label={name}
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
        css={SelectStyle}
        sx={{
          borderRadius: 1,
          "& .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: "whitesmoke",
            },
          "&.css-1h123mg-MuiFormLabel-root-MuiInputLabel-root-SelectLabel.Mui-focused":
            {
              display: "none",
            },
          "&.MuiSelect-icon": {
            color: "white",
          },
        }}
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select> */}
    </FormControl>
  );
};

export default SelectOption;
