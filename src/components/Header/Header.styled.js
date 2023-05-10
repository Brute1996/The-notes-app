import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 16px 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const HeaderStyle = styled.header`
  background-color: #d6d6d6;
  width: 100%;
`;
