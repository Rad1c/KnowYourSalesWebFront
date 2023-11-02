/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */
import { SelectStyle, SelectLabel, SelectContainer, ArrowDown } from "./styled";
import { useState, useEffect } from "react";

const SelectOption = ({ name, data, backgroundColor, color, disabled, returnSelectValue }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    setSelectData(data);
  }, [data]);

  return (
    <SelectContainer style={{ color, backgroundColor }}>
      <select
        name="select"
        style={{
          backgroundColor,
          color,
        }}
        css={SelectStyle}
        required
        label={name}
        value={selectedValue}
        onChange={(event) => {
          setSelectedValue(event.target.value);
          returnSelectValue(event.target.value);
        }}
      >
        <option
          value={name}
          style={{ backgroundColor, color }}
          css={SelectLabel}
          disabled={disabled}
        >
          {name}
        </option>
        {selectData?.map((item) => (
          <option
            style={{ backgroundColor, color }}
            css={SelectLabel}
            key={item.id}
            value={item.id}
          >
            {item.name}
          </option>
        ))}
      </select>
      <ArrowDown style={{ color }}>›</ArrowDown>
    </SelectContainer>
  );
};

export default SelectOption;
