import styled from "styled-components";
import { Card } from "../../components";

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  min-width: 280px;
  max-width: 100%;
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  border-bottom: 3px solid #a71ae7;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? "textDisabled" : "secondary"]};

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`;
