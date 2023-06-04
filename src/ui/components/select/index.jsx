/** @jsxImportSource @emotion/react */
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SelectStyle, SelectLabel } from "./styled";
import { useState, useEffect } from "react";

const SelectOption = (props) => {
  const { name, data } = props;

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <FormControl>
      <InputLabel id="lbl-select" css={SelectLabel}>
        {name}
      </InputLabel>
      <Select
        labelId="lbl-select"
        id="select"
        label={name}
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
        css={SelectStyle}
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectOption;
