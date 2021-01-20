import styled from "styled-components";
import { QuodLogo } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Card = styled.div`
  grid-area: card;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
  border-radius: 10px 10px 0px 0px;

  p {
    font-family: ${typography.inter};
    font-size: 21px;
    line-height: 26px;
    color: white;
    text-transform: uppercase;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  ${breakpoints.desktop} {
    padding-bottom: 40px;
  }
`;

const BodyLabel = styled.p`
  font-family: ${typography.roboto};
  font-size: 18px;
  font-weight: 700;
  line-height: 29px;
  color: #686868;
  margin-bottom: 32px;
`;

const Price = styled.p`
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  background: -webkit-linear-gradient(#1792f2, #226df3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoints.desktop} {
    padding: 0 20px;
  }
`;

const RoundBorderButton = styled.button`
  border-radius: 40px;
  padding: 12px 40px;
  background: ${colors.greenGradient};
  border: 0;
  outline: 0;
  font-family: ${typography.inter};
  font-size: 18px;
  line-height: 22px;
  color: white;

  ${breakpoints.desktop} {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    border-top: 0.5px solid #ccc;
    margin: 32px 20px -50px;
    padding-top: 32px;
  }
`;

function ActivePlanCard() {
  return (
    <Card>
      <Header>
        <p>Seu saldo atual</p>
      </Header>
      <Body>
        <BodyLabel>Você possui</BodyLabel>
        <Price>
          <span>R$ </span>49,90
        </Price>
      </Body>
      <ButtonContainer>
        <RoundBorderButton>Alterar plano</RoundBorderButton>
      </ButtonContainer>
      <LogoContainer>
        <QuodLogo />
      </LogoContainer>
    </Card>
  );
}

export default ActivePlanCard;
// export default function () {
//   return <div>opa</div>;
// }
