import styled, { css } from "styled-components";

import { colors, breakpoints } from "ui/theme";

export const Container = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 36px;
  overflow: visible;

  ${breakpoints.desktop} {
    max-width: 632px;
    margin: 0 auto;
    padding: 64px 0;
  }
`;

export const ImageContainer = styled.div`
  margin: -40px 0 -60px;

  img {
    height: 400px;
  }

  ${breakpoints.desktop} {
    position: absolute;
    left: 0;
    margin: -14 0px 0 -60px;

    img {
      height: auto;
      width: 40vw;
    }
  }
`;

export const Header = styled.div`
  grid-row: 1 / 2;
  display: grid;
  justify-content: center;
  text-align: center;

  span {
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    color: ${colors.blue300};
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  div {
    justify-content: center;
  }
`;

export const ActionContainer = styled.div`
  margin: 0 40px;

  ${breakpoints.desktop} {
    max-width: 290px;
  }
`;

export const Title = styled.h2`
  grid-row: 2 / 3;
  font-family: Inter, sans-serif;
  margin: 10px 20px 16px;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 2%;
  text-align: center;
  color: ${colors.green};

  ${breakpoints.desktop} {
    font-size: 45px;
    line-height: 55px;
    margin: 54px 0 20px;
  }
`;

export const Subtitle = styled.h3`
  grid-row: 3 / 4;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  margin: 0 20px 16px;
  font-weight: normal;
  color: ${colors.gray};

  ${breakpoints.desktop} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 94px;
  }
`;
