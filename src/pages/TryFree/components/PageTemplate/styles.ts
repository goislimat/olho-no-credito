import styled, { css } from "styled-components";

import { breakpoints, typography, colors } from "ui/theme";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 27px;
`;

export const Container = styled.section`
  padding: 34px 24px;

  ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 215px;
    max-width: 920px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: ${colors.green};
  margin-bottom: 30px;

  ${breakpoints.desktop} {
    display: none;
  }
`;

export const QueryContainer = styled.div`
  ${breakpoints.desktop} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const QueryCard = styled.div`
  background: ${colors.white};
  box-shadow: ${colors.shadow};
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const CardTitle = styled.p`
  background: ${colors.blueGradient};
  border-radius: 10px 10px 0 0;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  span {
    display: inline-block;
    margin-right: 16px;
    font-family: ${typography.inter};
    font-size: 35px;
    line-height: 42px;
  }
`;

export const CardDescription = styled.p`
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${typography.inter};
  font-size: 30px;
  line-height: 31px;
  font-weight: 800;
  background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const QueryResultList = styled.ul<{ isVisible?: true }>`
  ${({ isVisible }) => css`
    display: none;

    ${breakpoints.desktop} {
      list-style-type: none;
      margin-bottom: 50px;
      display: ${isVisible ? "grid" : "none"};
      row-gap: 16px;
    }
  `}
`;

export const QueryResultListItem = styled.li`
  color: ${colors.gray};
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  span {
    background: blue;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
  }

  svg {
    width: 14px;
    height: 10px;
  }
`;

export const FormStepContainer = styled.div`
  margin-bottom: 30px;

  ${breakpoints.desktop} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const FormContainer = styled.div`
  margin: 0 30px 64px;

  ${breakpoints.desktop} {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    margin: 0;
  }
`;

export const FormTitle = styled.p`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: ${colors.green};
  margin-bottom: 20px;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const QuodContainer = styled.div`
  ${breakpoints.desktop} {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;
