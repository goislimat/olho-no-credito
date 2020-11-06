import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "ui/theme";

export const NavigationContainer = styled.nav`
  background: ${colors.white};
  height: 86px;
  display: grid;
  grid-auto-flow: column;
  padding: 0 20px 0 12px;
  border-bottom: 1px solid ${colors.gray100};
  align-items: center;
`;

export const ActionsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 28px;
  justify-content: end;
  align-items: center;
`;

export const FloatingMenu = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
  background: ${colors.grayGradient};
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
