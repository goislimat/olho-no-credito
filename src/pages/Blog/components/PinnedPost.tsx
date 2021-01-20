import Image from "next/image";
import styled from "styled-components";
import { Icon } from "ui";
import { breakpoints, typography } from "ui/theme";

const Container = styled.div`
  grid-area: post;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  display: grid;
  place-content: center center;
`;

const DropShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(
    358.77deg,
    rgba(57, 57, 57, 0.88) 6.66%,
    rgba(34, 34, 34, 0.375146) 42.22%,
    rgba(17, 17, 17, 0) 58.58%
  );
`;

const PostInfoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
  max-width: 90%;
  z-index: 2;

  ${breakpoints.desktop} {
    left: 32px;
    max-width: 60%;
  }
`;

const Title = styled.h3`
  color: white;
  font-family: ${typography.roboto};
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  margin-bottom: 16px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 22px;
    font-weight: 700;
    line-height: 29px;
  }
`;

const Details = styled.div`
  font-family: ${typography.inter};
  font-size: 9px;
  font-weight: 400;
  line-height: 11px;
  color: white;
  display: inline-grid;
  column-gap: 8px;
  grid-auto-flow: column;
  align-items: center;

  ${breakpoints.desktop} {
    font-size: 13px;
    line-height: 16px;
  }
`;

const Circle = styled.span`
  display: inline-block;
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background-color: white;
`;

function PinnedPost() {
  return (
    <Container>
      <DropShadow />
      <Image
        src="/static_assets/images/pinned-post-image-2.jpg"
        alt="mulher empreendedora"
        width="800"
        height="560"
      />
      <PostInfoContainer>
        <Title>
          Como vender mais durante a semana do Brasil e no Dia do Cliente?
        </Title>
        <Details>
          <Icon name="clock" />
          <span>02/05/2020</span>
          <Circle />
          <span>4min de leitura</span>
        </Details>
      </PostInfoContainer>
    </Container>
  );
}

export default PinnedPost;
