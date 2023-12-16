import Schedule from "../../components/Scheduler/Schedule";
import ContainedButton from "../../components/Button/Button";
import { StyledSchedulePage } from "./StyledPrinters";
import { useState } from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

function SchedulePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const groups = [
    { id: 1, title: "group 1" },
    { id: 2, title: "group 2" },
    { id: 3, title: "group 3" },
    { id: 4, title: "group 4" },
    { id: 7, title: "group 7" },
    { id: 8, title: "group 8" },
    { id: 9, title: "group 9" },
    { id: 10, title: "group 10" },
    { id: 11, title: "group 11" },
    { id: 12, title: "group 12" },
  ];

  return (
    <>
      <StyledSchedulePage>
        <div className="title">
          Schedule
          <ContainedButton caption="Create reservation" onClick={handleOpen} />
        </div>
        <Schedule />
      </StyledSchedulePage>
      {modalOpen && (
        <ModalWindow
          caption="ddd"
          open={modalOpen}
          printers={groups}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default SchedulePage;
