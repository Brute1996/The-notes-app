import styled from "@emotion/styled";

export const ListStyle = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

export const ListItemStyle = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 100px;
  padding: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
