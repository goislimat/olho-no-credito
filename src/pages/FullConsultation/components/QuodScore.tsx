import styled, { css } from "styled-components";
import { colors, breakpoints } from "ui/theme";

import {
  ToKnowMore,
  TitleContainer,
  IconDonutScore,
  IconPointer,
} from "pages/FullConsultation/components";

import { Container } from "./styles";

const ContainerScore = styled.div`
  margin: 78px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InitRotation = styled.div`
  position: absolute;
  transform: rotate(160deg);
`;

const IconRotation = styled.div`
  ${({ angle }) =>
    css`
      ${angle &&
      css`
        transform: rotate(${angle}deg);
      `}// 0° | 90° | 188° | 278°
    `}
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

function QuodScore({ angle }) {
  return (
    <Container>
      <TitleContainer text="Quod Score" color="red" />
      <ContainerScore>
        <IconDonutScore size={120} />
        <InitRotation>
          <IconRotation angle={angle}>
            <IconPointer size={120} />
          </IconRotation>
        </InitRotation>
      </ContainerScore>
      <ToKnowMore />
    </Container>
  );
}

export default QuodScore;
