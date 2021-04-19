import { Navbar } from "ui";
import styled from "styled-components";

import {
  Share,
  Infraction,
  PersonalData,
  QuodScore,
  TrailQuodScore,
  PendingCreditControl,
  Localization,
  ScoreInfo,
} from "pages/FullConsultation/components";
import { colors, breakpoints } from "ui/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 0;

  ${breakpoints.desktop} {
    display: none;
  }
`;

const ContainerDesktop = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  ${breakpoints.desktop} {
    display: flex;
  }
`;

const Text = styled.span`
  font-size: 30px;
  font-weight: normal;
  color: ${colors.green300};

  ${breakpoints.desktop} {
    font-size: 35px;
  }
`;

function FullConsultation() {
  const score = 900;
  const scoreCalcAngle = (value: number) => {
    if (value < 401) {
      return 0;
    }
    const percent = ((value - 401) * 100) / 599;
    return (percent * 278) / 100;
  };

  const scoreCalcPercent = (value: number) =>
    value > 401 ? ((value - 401) * 100) / 599 : 4.5;

  return (
    <>
      <Navbar />

      <Container>
        <Text>Consulta completa</Text>
      </Container>

      <Share />

      <Infraction />

      <ContainerDesktop>
        <Text>Consulta completa</Text>
      </ContainerDesktop>

      <PersonalData />

      <QuodScore angle={scoreCalcAngle(score)} score={score} />

      <ScoreInfo />

      <TrailQuodScore score={scoreCalcPercent(score)} />

      <PendingCreditControl />

      <Localization />

      <div>Footer</div>
    </>
  );
}

export default FullConsultation;
