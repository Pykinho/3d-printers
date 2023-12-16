import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { StyledSelectInput } from "./StyledSelectInput";

const SelectInput: React.FC<{
  label: string;
  items: { id: number; title: string }[];
  className?: string;
}> = ({ label, items, className }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <StyledSelectInput>
      <FormControl className="formControl">
        <InputLabel id="demo-simple-select-helper-label" size="small">
          {label}
        </InputLabel>

        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className={className ? className : "select"}
          value={value}
          label={label}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">
            <em> </em>
          </MenuItem>
          {items.map((item) => (
            <MenuItem value={item.id}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledSelectInput>
  );
};
export default SelectInput;
