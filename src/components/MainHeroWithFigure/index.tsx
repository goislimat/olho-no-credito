import { Container, ImageContainer } from "./styles";

interface Props {
  removeImageOnMobile?: true;
  children: React.ReactNode;
}

function MainHeaderWithFigure({ removeImageOnMobile, children }: Props) {
  return (
    <Container>
      <ImageContainer removeImageOnMobile={removeImageOnMobile}>
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
