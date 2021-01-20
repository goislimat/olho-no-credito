import styled from "styled-components";
import { breakpoints, colors, typography } from "ui/theme";

const Content = styled.div`
  display: grid;
  row-gap: 50px;
  margin: 40px 0 80px;

  ${breakpoints.desktop} {
    display: none;
  }
`;

const Card = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #f2f2f2;
`;

const RowTitle = styled.span`
  font-family: ${typography.roboto};
  font-size: 15px;
  line-height: 19px;
  color: #686868;
  align-self: center;
`;

const RowValue = styled.span`
  font-family: ${typography.roboto};
  font-size: 15px;
  line-height: 19px;
  color: #94a2b3;
  justify-self: end;
  align-self: center;
`;

const DetailsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: ${colors.blueGradient};
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0 0 10px 10px;

  font-family: ${typography.inter};
  font-size: 16px;
  line-height: 29px;
`;

interface Props {
  queries: {
    contractNumber: string;
    contractDate: string;
    dueDateDay: number;
    nextCicleDate: string;
    detailsLink: string;
  }[];
}

function MobileQueriesView({ queries }: Props) {
  return (
    <Content>
      {queries.map(function (query) {
        return (
          <Card>
            <CardRow>
              <RowTitle>Nº do contrato</RowTitle>
              <RowValue>{query.contractNumber}</RowValue>
            </CardRow>
            <CardRow>
              <RowTitle>Data da contratação</RowTitle>
              <RowValue>{query.contractDate}</RowValue>
            </CardRow>
            <CardRow>
              <RowTitle>Vencimento da fatura</RowTitle>
              <RowValue>{`Dia ${query.dueDateDay}`}</RowValue>
            </CardRow>
            <CardRow>
              <RowTitle>Data do próximo ciclo</RowTitle>
              <RowValue>{query.nextCicleDate}</RowValue>
            </CardRow>
            <DetailsLink href={query.detailsLink}>Ver detalhes</DetailsLink>
          </Card>
        );
      })}
    </Content>
  );
}

export default MobileQueriesView;
