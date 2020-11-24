import styled from "styled-components";

import { Hero } from "pages/Auth/RecoverySuccess/components";
import { colors } from "ui/theme";

const Content = styled.div`
  background: ${colors.greenGradient};
  overflow-y: hidden;
  min-height: 100vh;
`;

function RecoverySuccess() {
  return (
    <Content>
      <Hero />
    </Content>
  );
}

export default RecoverySuccess;
