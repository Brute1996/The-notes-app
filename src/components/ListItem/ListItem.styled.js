import styled from "@emotion/styled";

export const ListStyle = styled.ul`
  overflow-y: scroll;
  height: 100%;
  display: flex;
  min-height: 115px;
  max-height: 115px;

  @media (min-width: 768px) {
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;

export const ListItemStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 115px;
  max-height: 115px;
  min-width: 150px;
  max-width: 150px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 18px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 105px;
  }

  .note-short-title {
    height: 25px;
    font-size: 20px;
    max-width: 270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  .note-item-info {
    display: flex;
    align-items: baseline;
    flex-direction: column;
    gap: 6px;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 0;
    }
  }

  .time-created {
    display: block;
    min-width: 75px;
    font-size: 16px;
    margin: 0 auto;

    @media (min-width: 768px) {
      margin: 0 4px 0 0;
    }
  }

  .note-short-text {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
    height: 18px;
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      max-width: 230px;
    }
  }

  .edit-mode-icon {
    position: absolute;
    bottom: 8%;
    left: 3%;
  }
`;
