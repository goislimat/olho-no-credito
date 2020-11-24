import Image from "next/image";
import styled from "styled-components";

import { typography, colors, breakpoints } from "ui/theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  p {
    font-family: ${typography.inter};
    text-transform: uppercase;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 1px;
    font-weight: 600;
    color: ${colors.blue300};
  }

  div {
    width: 113px;
  }

  ${breakpoints.desktop} {
    div {
      width: 191px;
    }
  }
`;

function QuodLogo() {
  return (
    <LogoContainer>
      <p>Distribuidor autorizado</p>
      <div>
        <Image
          src="/static_assets/images/quod.svg"
          alt="quod logo"
          width="191"
          height="103"
        />
      </div>
    </LogoContainer>
  );
}

export default QuodLogo;
