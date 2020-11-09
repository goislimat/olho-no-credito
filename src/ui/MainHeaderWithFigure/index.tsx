import { Button } from "ui";

import {
  Container,
  ImageContainer,
  Header,
  ActionContainer,
  Title,
  Subtitle,
} from "./styles";

function MainHeaderWithFigure() {
  return (
    <Container>
      <ImageContainer>
        <img
          src="/static_assets/images/main-mascote.svg"
          alt="mascote olho no crédito"
        />
      </ImageContainer>

      <Header>
        <span>Distribuidor autorizado</span>
        <div>
          <img src="/static_assets/images/quod.svg" alt="quod logo" />
        </div>
      </Header>

      <Title>Na dúvida se é seguro fechar negócio com aquele cliente?</Title>
      <Subtitle>Descubra hoje mesmo com a OlhonoCred</Subtitle>

      <ActionContainer>
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
      </ActionContainer>
    </Container>
  );
}

export default MainHeaderWithFigure;
