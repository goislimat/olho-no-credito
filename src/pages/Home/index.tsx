import styled from "styled-components";

import {
  Hero,
  ProductDescription,
  Plans,
  HowEasyIsToQuery,
  Products,
  FAQ,
  Newsletter,
  Footer,
} from "pages/Home/components";
import { Button, Icon, Navbar } from "ui";
import { colors } from "ui/theme";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 62px;

  svg {
    transform: rotate(270deg);

    path {
      fill: ${colors.white};
    }
  }
`;

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <ButtonContainer>
        <Button
          background="greenGradient"
          rounded
          padding="12px"
          withShadow
          onClick={() => {}}
        >
          <Icon name="leftArrow" />
        </Button>
      </ButtonContainer>

      <ProductDescription />
      <Plans />
      <HowEasyIsToQuery />
      <Products />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
