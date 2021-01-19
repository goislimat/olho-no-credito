import styled from "styled-components";
import { typography } from "ui/theme";

const Content = styled.div``;

const PageTitle = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #696969;
  margin-bottom: 24px;
`;

const Subtitle = styled.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #94a2b3;
  padding: 0 24px;
  margin-bottom: 32px;
`;

// const Content = styled.div`
//   max-width: 598px;
//   margin: 40px auto 32px;
// `;

// const PageTitle = styled.h1`
//   font-family: ${typography.inter};
//   font-size: 35px;
//   font-weight: 600;
//   line-height: 42px;
//   text-align: center;
//   color: #696969;
// `;

// const Subtitle = styled.h2`
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 25px;
//   text-align: center;
//   color: #94a2b3;
//   margin-top: 32px;
// `;

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
