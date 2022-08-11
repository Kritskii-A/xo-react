import styled from "styled-components";

export const StyledXOWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
`;

export const StyledXOCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
`;

export const StyledXOFigure = styled.span`
  font-size: 24px;
`;

export const StyledXOBord = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 302px;
  height: 302px;
  border: 1px solid #000;
`;

export const StyledXOWinner = styled.div<{ isWinner: boolean }>`
  ${(props) =>
    props?.isWinner
      ? `background: linear-gradient(
    to right,
    rgb(244 152 173 / 0),
    #86a8e7,
    rgb(244 152 173 / 0));`
      : ""}

  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
