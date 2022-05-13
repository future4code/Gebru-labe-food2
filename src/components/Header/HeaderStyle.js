import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledToolbar = styled.div`
  height: 4rem;
  display: flex;
  padding-left: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 56%;
  @media (max-width: 380px) {
    width: 60%;
  }
`;

export const StyledTitle = styled.div`
   display: flex; 
  justify-content: center;
  align-items: center; 
  margin: 0 auto;
  width: 360px;
  height: 64px;
  font-size:18px;
`;
export const StyledSubBox = styled.div`
  margin-top: 1.75rem;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: -0.39px;
  display: flex;
  align-items: center;
  justify-content: center;
`;