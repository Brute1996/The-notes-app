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
    font-size: 16px;
    user-select: none;
    pointer-events: none;
  }

  input {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 4px;
    height: 36px;
    width: 250px;
  }
`;

export default SearchBoxStyle;
