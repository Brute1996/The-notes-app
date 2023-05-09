import styled from "@emotion/styled";

export const ListStyle = styled.ul`
  max-height: 600px;
  width: 400px;
  overflow: scroll;
`;

export const ListItemStyle = styled.li`
  border: 1px solid black;
  min-height: 100px;
  padding: 10px;
  p {
    width: 300px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
