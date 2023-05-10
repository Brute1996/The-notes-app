import styled from "@emotion/styled";

export const ListStyle = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;

export const ListItemStyle = styled.li`
  position: relative;
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
    align-items: center;
  }

  .time-created {
    font-size: 17px;
    margin-right: 12px;
  }

  .note-short-text {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
  }

  .edit-mode-icon {
    position: absolute;
    bottom: 8%;
    left: 3%;
  }
`;
