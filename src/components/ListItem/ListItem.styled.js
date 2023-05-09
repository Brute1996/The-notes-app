import styled from "@emotion/styled";

export const ListStyle = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

export const ListItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 100px;
  padding: 18px 25px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .note-short-title {
    height: 25px;
  }

  .note-item-info {
    display: flex;
  }

  .time-created {
    margin-right: 15px;
  }

  .note-short-text {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8);
  }
`;
