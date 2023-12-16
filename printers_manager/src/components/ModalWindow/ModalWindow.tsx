import React from "react";
import { FC, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Grid, Modal, Box, Typography } from "@mui/material";
import { StyledModalWindow } from "./StyledModalWindow";
import ContainedButton from "../Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import TextInput from "../TextInput/TextInput";
import DatePicker from "../DateTimePicker/DateTimePicker";

const ModalWindow: FC<{
  caption: string;
  open: boolean;
  printers: { id: number; title: string }[];
  handleClose: () => void;
}> = ({ caption, open, printers, handleClose }) => {
  const [startDateTime, setStartDateTime] = useState<Dayjs | null>(null);
  const [endDateTime, setEndDateTime] = useState<Dayjs | null>(null);
  const changeStartDateTime = (newValue: Dayjs | null) => {
    setStartDateTime(newValue);
  };

  const changeEndDateTime = (newValue: Dayjs | null) => {
    if (newValue?.isBefore(startDateTime)) {
      setStartDateTime(newValue);
    }
    setEndDateTime(newValue);
  };

  return (
    <StyledModalWindow>
      <div onClick={handleClose} className="overlay"></div>
      <div className="modal-content">
        <div className="title">
          Create Reservation <hr />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextInput label="Title" />
          </Grid>
          <Grid item xs={6}>
            <SelectInput label="Printer" items={printers} />
          </Grid>

          <Grid item xs={6}>
            <SelectInput label="Material" items={printers} />
          </Grid>
          <Grid item xs={6}>
            <TextInput label="Amount" type="Number" />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label="Start"
              value={startDateTime}
              onChange={(newValue: Dayjs | null) =>
                changeStartDateTime(newValue)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label="End"
              value={endDateTime}
              onChange={(newValue: Dayjs | null) => changeEndDateTime(newValue)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput label="Description" multiline />
          </Grid>
        </Grid>

        <div className="footer">
          <ContainedButton
            caption="Close"
            onClick={handleClose}
            className="cancelBtn"
          />
          <ContainedButton caption="Save" onClick={handleClose} />
        </div>
      </div>
    </StyledModalWindow>
  );
};

export default ModalWindow;
