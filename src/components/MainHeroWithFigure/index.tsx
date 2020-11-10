import { Container, ImageContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

function MainHeaderWithFigure({ children }: Props) {
  return (
    <Container>
      <ImageContainer>
        <img
          src="/static_assets/images/main-mascote.svg"
          alt="mascote olho no crédito"
        />
      </ImageContainer>

      {children}
    </Container>
  );
}

export default MainHeaderWithFigure;
