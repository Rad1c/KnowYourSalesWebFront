/** @jsxImportSource @emotion/react */
import {
  FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  // rgbToHex,
} from "@mui/material";
import { SelectStyle, SelectLabel } from "./styled";
import { useState } from "react";

const SelectOption = (props) => {
  const { name, data } = props;
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <FormControl>
      {/* <InputLabel id="lbl-select" css={SelectLabel}>
        {name}
      </InputLabel> */}
      <select
        name="select"
        css={SelectStyle}
        required
        label={name}
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        <option value={name} css={SelectLabel}>
          {name}
        </option>
        {data.map((item) => (
          <option css={SelectLabel} key={item.id} value={item.id}>
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
