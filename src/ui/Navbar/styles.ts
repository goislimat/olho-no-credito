import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoints, colors } from "ui/theme";

export const NavigationContainer = styled.nav`
  z-index: 3;
  position: relative;
  background: ${colors.white};
  height: 86px;
  display: grid;
  grid-auto-flow: column;
  padding: 0 20px 0 12px;
  border-bottom: 1px solid ${colors.gray100};
  align-items: center;
`;

export const NavLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 90px;
  align-items: center;
  justify-content: start;

  h1 {
    width: 0;
    height: 0;
  }
`;

export const NavActions = styled.div``;

export const DesktopMenu = styled.nav`
  display: none;

  ${breakpoints.desktop} {
    display: grid;
    grid-auto-flow: column;
    column-gap: 70px;
    list-style-type: none;
    font-size: 12px;
    color: ${colors.gray};
  }
`;

export const MenuLinks = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  cursor: pointer;
`;

export const ActionsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 28px;
  justify-content: end;
  align-items: center;

  ${breakpoints.desktop} {
    border-left: 1px solid ${colors.gray100};
  }
`;

export const FloatingMenu = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: ${colors.grayGradient};
  z-index: 10;

  ${breakpoints.desktop} {
    display: none;
  }
`;

export const FloatingMenuList = styled.ul`
  padding: 0 20px;

  a {
    font-family: Inter, sans-serif;
    font-size: 18px;
    line-height: 22px;
    display: block;
    padding: 28px 0 20px;
    color: ${colors.gray600};
    border-bottom: 2px solid ${colors.opaqueGray};
  }
`;

export const MascoteHolder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
