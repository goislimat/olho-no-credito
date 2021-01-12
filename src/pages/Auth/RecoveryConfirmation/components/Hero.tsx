import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Icon, QuodLogo } from "ui";
import { usePasswordRecovery } from "pages/Auth/context/PasswordRecoveryContext";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 180px;

  p {
    color: ${colors.gray};
    font-family: ${typography.inter};
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  ${breakpoints.desktop} {
    max-width: 382px;
    margin: 110px 0 40px;
  }
`;

const IconContainer = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.green};
  border-radius: 50%;
`;

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  font-weight: 600;
  color: ${colors.green};
  margin: 40px 0 28px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 453px;
    margin: 60px 0 28px;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 42px;

  ${breakpoints.desktop} {
    width: 382px;
    margin-bottom: 60px;
  }
`;

function maskEmail(email: string | undefined): string {
  if (!email) return "";

  const [user, provider] = email.split("@");
  return `${user.substring(0, 2)}****@${provider}`;
}

function Hero() {
  const passwordRecovery = usePasswordRecovery();

  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Header>
        <IconContainer>
          <Icon name="check" />
        </IconContainer>
        <Title>Bom trabalho!</Title>
        <p>
          {`Foi enviado um link para recuperação de senha no seu e-mail
          (${maskEmail(
            passwordRecovery?.getRecoveryEmail()
          )}). Confira também sua caixa de SPAMS`}
        </p>
      </Header>

      <ButtonContainer>
        <Button
          uppercase
          background="blueGradient"
          width="100%"
          padding="12px"
          onClick={() => {}}
        >
          Ok
        </Button>
      </ButtonContainer>

      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
