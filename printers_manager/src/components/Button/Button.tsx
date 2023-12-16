import { Button } from "@mui/material";
import { StyledButton } from "./StyledButton";
import React from "react";

const ContainedButton: React.FC<{
  caption: string;
  className?: string;
  onClick: () => void;
}> = ({ caption, className, onClick }) => {
  return (
    <StyledButton>
      <Button
        variant="contained"
        className={className ? className : "button"}
        onClick={onClick}
      >
        {caption}
      </Button>
    </StyledButton>
  );
};
export default ContainedButton;
