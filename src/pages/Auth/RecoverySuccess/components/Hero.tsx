import Image from "next/image";
import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Icon } from "ui";

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  margin: 15px 0 28px;
  max-width: 245px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 495px;
    margin: 21px 0 28px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 160px;

  div {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.white};
    border-radius: 50%;
  }

  svg {
    width: 39px;
    height: 27px;

    path {
      stroke: ${colors.green};
    }
  }
`;

function Hero() {
  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Image
        src="/static_assets/images/olho-no-credito-logo-branco.svg"
        alt="olho no crédito logo"
        width="155"
        height="89"
      />

      <Header>
        <div>
          <Icon name="check" />
        </div>
        <Title>Atualização feita com sucesso</Title>
      </Header>
    </MainHeroWithFigure>
  );
}

export default Hero;
