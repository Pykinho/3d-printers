import { TextField, FormControl, InputLabel } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import de from "date-fns/locale/de";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StyledDateTimePicker } from "./StyledDateTimePicker";
import { format } from "date-fns";

const DatePicker: React.FC<{
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  className?: string;
}> = ({ label, value, onChange }) => {
  const formatDate = (date: Date) => {
    return dayjs(date).format("DD MMMM YY HH:mm");
  };

  return (
    <StyledDateTimePicker>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <FormControl className="formControl"> */}
        {/* <InputLabel id="demo-simple-select-helper-label" size="small">
          {label}
        </InputLabel> */}
        <DateTimePicker
          label={label}
          value={value}
          onChange={onChange}
          className="picker"
          timezone="system"
        />
        {/* </FormControl> */}
      </LocalizationProvider>
    </StyledDateTimePicker>
  );
};
export default DatePicker;
