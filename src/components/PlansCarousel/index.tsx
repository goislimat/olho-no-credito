import styled, { css } from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import PlanCardType from "types/PlanCard";
import { PlanCard, Icon, Button } from "ui";
import { breakpoints, colors } from "ui/theme";

const Container = styled.section`
  background: ${colors.greenGradient};
  padding: 50px 38px 114px;
  position: relative;
`;

const ContentWithControls = styled(CarouselProvider)`
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

const CardsContainer = styled(Slider)`
  display: none;

  ${breakpoints.desktop} {
    display: block;
  }
`;

const MobileContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 82px;

  ${breakpoints.desktop} {
    display: none;
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

const controlButton = css`
  height: 57px;
  width: 57px;
  background: linear-gradient(222.92deg, #ffffff 8.95%, #edf0ed 82.38%);
  box-shadow: 6px 6px 15px rgba(7, 25, 110, 0.24);
  border-radius: 50%;
  border: 0;
  display: grid;
  place-content: center center;
  outline: 0;
`;

const PrevButton = styled(ButtonBack)`
  ${controlButton}
`;

const NextButton = styled(ButtonNext)`
  ${controlButton}

  svg {
    transform: rotate(180deg);
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

        <MobileContainer>
          {plans.map(function (plan) {
            return <PlanCard plan={plan} key={plan.numberOfQueries} />;
          })}
        </MobileContainer>

        <ContentWithControls
          naturalSlideHeight={0}
          naturalSlideWidth={0}
          totalSlides={4}
          visibleSlides={3}
          isIntrinsicHeight
        >
          <Control>
            <PrevButton>
              <Icon name="leftArrow" />
            </PrevButton>
          </Control>

          <CardsContainer>
            {plans.map(function (plan, index) {
              return (
                <Slide key={plan.monthlyPaymentCents} index={index}>
                  <PlanCard plan={plan} key={plan.numberOfQueries} />
                </Slide>
              );
            })}
          </CardsContainer>

          <Control>
            <NextButton>
              <Icon name="leftArrow" />
            </NextButton>
          </Control>
        </ContentWithControls>
      </Container>
    </>
  );
}

export default PlansCarousel;
