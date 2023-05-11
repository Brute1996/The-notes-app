import styled from "@emotion/styled";

const WorkspaceStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  .saved-icon {
    position: absolute;
    bottom: 1%;
    left: 0.25%;

    font-size: 28px;
    color: rgba(0, 0, 0, 0.7);
    animation: fade 1000ms;
  }

  time {
    padding: 6px;
    text-align: center;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    color: grey;

    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      margin-top: 5px;
      background-color: #d6d6d6;
      max-width: 355px;
      height: 4px;
      border-radius: 5px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
      font-weight: 500;
    }
  }

  input {
    padding: 15px 30px;
    height: 36px;
    font-size: 18px;
    font-weight: 500;
    border: none;

    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    resize: none;
    height: 100%;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
export default WorkspaceStyle;
