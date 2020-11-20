import styled from "styled-components";

import PlanCardType from "types/PlanCard";
import { asMoney } from "helpers/numberFormat";
import { Button } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Card = styled.article`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  background: ${colors.blueGradient};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 24px;
  border-radius: 10px 10px 0 0;
  position: relative;

  p {
    font-size: 12px;
    line-height: 14px;
  }
`;

const QueriesCount = styled.span`
  display: block;
  font-size: 45px;
  line-height: 54px;
  font-family: Inter, sans-serif;
  font-weight: 600;
`;

const FeaturedTag = styled.span`
  background: ${colors.green};
  color: ${colors.white};
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  display: block;
  padding: 4px 48px;
  border-radius: 20px;
  position: absolute;
  bottom: -10px;
`;

const Content = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QueryPrice = styled.p`
  font-family: Inter, sans-serif;
  font-size: 17px;
  line-height: 20px;
  color: ${colors.gray};
  margin-bottom: 48px;
  text-align: center;

  em {
    font-style: normal;
    font-weight: 700;
    color: ${colors.blue700};
  }
`;

const PriceContainer = styled.div`
  display: grid;
`;

const PriceLabel = styled.span`
  font-family: Inter, sans-serif;
  font-size: 30px;
  line-height: 31px;
  font-weight: 700;
  background: -webkit-linear-gradient(#1792f2, #226df3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Price = styled.span`
  font-family: Inter, sans-serif;
  font-size: 60px;
  line-height: 62px;
  font-weight: 700;
  background: -webkit-linear-gradient(#1792f2, #226df3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MonthlyLabel = styled.span`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 15%;
  text-align: right;
  color: ${colors.gray};
`;

const Footer = styled.footer`
  padding: 0 24px 32px;
`;

interface Props {
  plan: PlanCardType;
}

function PlanCard({
  plan: { numberOfQueries, valuePerQueryCents, monthlyPaymentCents, featured },
}: Props) {
  return (
    <Card key={numberOfQueries}>
      <Header>
        <QueriesCount>{numberOfQueries}</QueriesCount>
        <p>Consultas de crédito/mês</p>
        {featured && <FeaturedTag>Recomendado</FeaturedTag>}
      </Header>

      <Content>
        <QueryPrice>
          Apenas <em>{asMoney(valuePerQueryCents)}</em> por consulta{" "}
          {featured && "completa PF"}
        </QueryPrice>

        <PriceContainer>
          <PriceLabel>R$:</PriceLabel>
          <Price>{asMoney(monthlyPaymentCents, true)}</Price>
          <MonthlyLabel>mensal</MonthlyLabel>
        </PriceContainer>
      </Content>

      <Footer>
        <Button
          background="greenGradient"
          uppercase
          padding="20px"
          border-radius="50px"
          width="100%"
          onClick={() => {}}
        >
          Eu quero
        </Button>
      </Footer>
    </Card>
  );
}

export default PlanCard;
