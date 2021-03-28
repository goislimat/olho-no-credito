import styled from "styled-components";
import { colors, breakpoints } from "ui/theme";

import { ToKnowMore, TitleContainer } from "pages/FullConsultation/components";

import { Container } from "./styles";

const PendingCreditControlContainer = styled.div`
  display: flex;
  margin: 78px 0;
  justify-content: space-around;
`;

// const TextBold = styled.div`
//   font-weight: bold;
//   font-size: 15px;

//   ${breakpoints.desktop} {
//     margin: 0 auto 33px auto;
//   }
// `;

// const TextMedium = styled.p`
//   font-weight: 500;
//   font-size: 18px;

//   ${breakpoints.desktop} {
//     margin: 0 auto 33px auto;
//   }
// `;

// const TextRed = styled.p`
//   font-weight: bold;
//   font-size: 35px;
//   color: ${colors.red};

//   ${breakpoints.desktop} {
//     margin: 0 auto 33px auto;
//   }
// `;

function PendingCreditControl() {
  return (
    <Container>
      <TitleContainer text="Pendências ControlCred" color="red" />
      <PendingCreditControlContainer>
        <div>aa</div>
      </PendingCreditControlContainer>
      <ToKnowMore />
    </Container>
  );
}

export default PendingCreditControl;
