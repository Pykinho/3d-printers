import { TextField } from "@mui/material";
import React from "react";
import { StyledTextInput } from "./StyledTextInput";

const TextInput: React.FC<{
  label: string;
  className?: string;
  type?: string;
  multiline?: boolean;
}> = ({ label, type, className, multiline }) => {
  return (
    <StyledTextInput>
      <TextField
        id="outlined-multiline-flexible"
        label={label}
        type={type ? type : "text"}
        className={className ? className : "input"}
        multiline={multiline ? multiline : false}
        maxRows={1}
        InputProps={{ inputProps: { min: 0 } }}
        InputLabelProps={{ size: "small" }}
      />
    </StyledTextInput>
  );
};
export default TextInput;
