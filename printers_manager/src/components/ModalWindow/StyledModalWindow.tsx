import styled from "styled-components";

export const StyledModalWindow = styled.div`
  z-index: 90;
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: white;
    padding: 14px 28px;
    border-radius: 3px;
    width: 600px;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }
  .footer {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }
  .cancelBtn {
    background-color: white;
    color: black;
    margin-right: 20px;
    border: 1px solid black;
    border-radius: 8px;
  }
  .title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    .hr {
      color: red;
    }
  }
`;
