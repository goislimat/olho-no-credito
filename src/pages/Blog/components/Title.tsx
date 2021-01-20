import styled from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  ${breakpoints.desktop} {
    max-width: 580px;
    margin: 0 auto;
  }
`;

const PageTitle = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #696969;
  margin-bottom: 24px;

  ${breakpoints.desktop} {
    font-size: 35px;
    line-height: 42px;
  }
`;

const Subtitle = styled.h2`
  font-family: ${typography.roboto};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: #94a2b3;
  padding: 0 24px;
  margin-bottom: 32px;

  ${breakpoints.desktop} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 48px;
  }
`;

function Title() {
  return (
    <Content>
      <PageTitle>Blog</PageTitle>
      <Subtitle>
        Fique por dentro de todas as matérias sobre saúde financeira, os pontos
        positivos de fazer análise de crédito antes da venda e muito mais
      </Subtitle>
    </Content>
  );
}

export default Title;
