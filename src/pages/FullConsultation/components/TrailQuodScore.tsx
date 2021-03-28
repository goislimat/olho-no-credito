import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colors, breakpoints } from "ui/theme";

import {
  ToKnowMore,
  TitleContainer,
  IconDownArrow,
} from "pages/FullConsultation/components";

import { Container } from "./styles";

const TrailQuodContainer = styled.div`
  width: 85%;
  margin: 34px auto 23px auto;
  position: relative;

  ${breakpoints.desktop} {
    margin: 79px auto 71px auto;
  }
`;

const TextBlack = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.gray400};
  margin-bottom: 20px;

  ${breakpoints.desktop} {
    font-size: 18px;
  }
`;

const TextMedium = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.gray400};
  margin-bottom: 45px;

  ${breakpoints.desktop} {
    margin-bottom: 72px;
    font-size: 18px;
  }
`;

const TrailContainer = styled.div`
  width: 100%;
  height: 40px;
  background: ${colors.trailQuodScoreGradient};
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${breakpoints.desktop} {
    height: 80px;
  }
`;

const TrailContainerFooter = styled.div`
  width: 100%;
  margin-top: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrailTextFooter = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.gray400};
`;

const TrailIconPosition = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  ${({ score }) =>
    css`
      ${score &&
      css`
        width: ${score}%;
      `}
    `}
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: -14px;

  ${breakpoints.desktop} {
    bottom: -20px;
  }
`;

const TextScore = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: white;

  ${breakpoints.desktop} {
    font-size: 20px;
  }
`;

function TrailQuodScore({ score }: any) {
  const [size, setSize] = useState(28);

  React.useEffect(() => {
    if (window !== undefined && window?.innerWidth > 1024) {
      setSize(42);
    } else {
      setSize(28);
    }
  }, []);

  return (
    <Container>
      <TitleContainer text="Faixas do Score Quod" color="red" />
      <TrailQuodContainer>
        <TextBlack>
          Pontuação de acordo com a probabilidade do consumidor honrar seus
          pagamentos
        </TextBlack>
        <TextMedium>
          A probabilidade de pagamento é calculada a partir de técnicas
          estatisticas avançadas e dados permitidos pela legislação vigente.
        </TextMedium>
        <TrailIconPosition score={score}>
          <DownArrow>
            <IconDownArrow size={size} />
          </DownArrow>
        </TrailIconPosition>

        <TrailContainer>
          <TextScore>401 à 500</TextScore>
          <TextScore>501 à 600</TextScore>
          <TextScore>601 à 700</TextScore>
          <TextScore>701 à 800</TextScore>
          <TextScore>801 à 900</TextScore>
          <TextScore>901 à 1000</TextScore>
        </TrailContainer>

        <TrailContainerFooter>
          <TrailTextFooter>BAIXA</TrailTextFooter>
          <TrailTextFooter>ALTA</TrailTextFooter>
        </TrailContainerFooter>
      </TrailQuodContainer>
      <ToKnowMore />
    </Container>
  );
}

export default TrailQuodScore;
