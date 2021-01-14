import styled from "styled-components";

import PlanCardType from "types/PlanCard";
import { PlanCard, Icon, Button } from "ui";
import { breakpoints, colors } from "ui/theme";

const Container = styled.section`
  background: ${colors.greenGradient};
  padding: 50px 38px 114px;
  position: relative;
`;

const ContentWithControls = styled.div`
  ${breakpoints.desktop} {
    display: grid;
    grid-auto-flow: column;
    column-gap: 76px;
    align-items: center;
    max-width: 1274px;
    margin: 0 72px;
  }
`;

const Control = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
  }
`;

const RightButton = styled(Button)`
  svg {
    transform: rotate(180deg);
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 82px;

  ${breakpoints.desktop} {
    grid-auto-flow: column;
    column-gap: 55px;
  }
`;

const Title = styled.h2`
  font-family: Inter, sans-serif;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 2%;
  font-weight: 600;
  color: ${colors.white};
  text-align: center;
  margin-bottom: 32px;

  ${breakpoints.desktop} {
    font-size: 35px;
    line-height: 42px;
    max-width: 395px;
    margin: 105px auto 24px;
  }
`;

const Subtitle = styled.p`
  color: ${colors.gray300};
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 48px;

  ${breakpoints.desktop} {
    font-size: 18px;
    line-height: 25px;
    max-width: 920px;
    margin: 0 auto;
    margin-bottom: 68px;
  }
`;

const Wave = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
  }
`;

interface Props {
  sectionTitle: string;
  subtitle?: string;
  plans: PlanCardType[];
}

function PlansCarousel({ sectionTitle, subtitle, plans }: Props) {
  return (
    <>
      <Container>
        <Wave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 30">
            <path
              fill="#fff"
              fill-opacity="1"
              strokeWidth="0"
              d="M0,0 C480,30 960,30 1440,0 Z"
            ></path>
          </svg>
        </Wave>

        <Title>{sectionTitle}</Title>

        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        <ContentWithControls>
          <Control>
            <Button
              onClick={() => {}}
              rounded
              background="white"
              padding="20px"
              withShadow
            >
              <Icon name="leftArrow" />
            </Button>
          </Control>

          <CardsContainer>
            {plans.map(function (plan) {
              return <PlanCard plan={plan} key={plan.numberOfQueries} />;
            })}
          </CardsContainer>

          <Control>
            <RightButton
              onClick={() => {}}
              rounded
              background="white"
              padding="20px"
              withShadow
            >
              <Icon name="leftArrow" />
            </RightButton>
          </Control>
        </ContentWithControls>
      </Container>
    </>
  );
}

export default PlansCarousel;
