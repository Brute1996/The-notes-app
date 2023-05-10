import styled from "@emotion/styled";

const SidebarStyle = styled.div`
  .buttons-block {
    display: flex;
    gap: 30px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    width: 55px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #000;
    background-color: #f8f8f8;
    font-size: 26px;
    border: none;
    transition: box-shadow 300ms ease-in-out, scale 300ms ease-in-out;

    &:not([disabled]):hover {
      box-shadow: 0px 0px 15px #000;
    }

    @media (min-width: 768px) {
      width: 70px;
      font-size: 32px;
    }
  }
`;

export default SidebarStyle;
