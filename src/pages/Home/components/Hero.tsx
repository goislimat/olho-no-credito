import styled from "styled-components";
import { MainHeroWithFigure } from "components";

import { Button } from "ui";
import { colors, breakpoints } from "ui/theme";

const QuodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  ${breakpoints.desktop} {
    margin-bottom: 54px;

    img {
      width: 191px;
    }
  }
`;

const DistributorLabel = styled.span`
  font-family: Inter, sans-serif;
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  color: ${colors.blue300};
  letter-spacing: 1px;
  text-transform: uppercase;

  ${breakpoints.desktop} {
    font-size: 13px;
    line-height: 15px;
  }
`;

const Title = styled.h1`
  font-family: Inter, sans-serif;
  font-size: 25px;
  line-height: 30px;
  color: ${colors.green};
  text-align: center;
  margin-bottom: 16px;
  font-weight: 600;

  ${breakpoints.desktop} {
    max-width: 632px;
    font-size: 45px;
    line-height: 54px;
    margin-bottom: 20px;
  }
`;

const Subtitle = styled.h2`
  font-size: 14px;
  line-height: 20px;
  color: ${colors.gray};
  text-align: center;
  margin-bottom: 300px;
  font-weight: 400;

  ${breakpoints.desktop} {
    max-width: 632px;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 94px;
  }
`;

const CTAContainer = styled.div`
  margin: 0 10px;
  width: 100%;

  ${breakpoints.desktop} {
    max-width: 293px;
  }
`;

function Hero() {
  return (
    <>
      <MainHeroWithFigure>
        <QuodContainer>
          <DistributorLabel>Distribuidor autorizado</DistributorLabel>
          <div>
            <img src="/static_assets/images/quod.svg" alt="quod logo" />
          </div>
        </QuodContainer>

        <Title>Na dúvida se é seguro fechar negócio com aquele cliente?</Title>
        <Subtitle>Descubra hoje mesmo com a OlhonoCred</Subtitle>

        <CTAContainer>
          <Button
            background="blueGradient"
            uppercase
            fullWidth
            cta
            padding="16px"
            onClick={() => console.log("make me do something")}
          >
            Quero contratar
          </Button>
        </CTAContainer>
      </MainHeroWithFigure>
    </>
  );
}

export default Hero;
