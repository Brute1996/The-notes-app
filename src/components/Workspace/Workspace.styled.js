import styled from "@emotion/styled";

const WorkspaceStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  time {
    padding: 6px;
    text-align: center;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    color: grey;

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
`;
export default WorkspaceStyle;
