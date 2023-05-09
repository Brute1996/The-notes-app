import styled from "@emotion/styled";

const SearchBoxStyle = styled.div`
  position: relative;

  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-55%, -50%);
    font-size: 18px;
    user-select: none;
    pointer-events: none;
  }

  input {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 6px;
    height: 38px;
    width: 300px;
    box-shadow: 0px 0px 2px #000;

    &:focus {
      outline: none;
    }
  }
`;

export default SearchBoxStyle;
