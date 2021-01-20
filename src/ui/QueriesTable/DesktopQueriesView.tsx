import styled from "styled-components";
import { breakpoints, colors, typography } from "ui/theme";

const Content = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 40px 30px;
  }
`;

const TableHeader = styled.th`
  background: ${colors.blueGradient};
  padding: 16px 8px;
  border-radius: 6px 6px 0 0;
  color: white;

  font-family: ${typography.inter};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

const TableContent = styled.td`
  padding: 16px 8px;
  color: #838383;

  font-family: ${typography.inter};
  font-size: 13px;
  line-height: 16px;
  text-align: center;
`;

const TableRow = styled.tr`
  background: #f7f7f7;
`;

const DetailsLink = styled.a`
  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: #2721f3;
  text-transform: uppercase;
  text-decoration: none;
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

function DesktopQueriesView({ queries }: Props) {
  return (
    <Content>
      <table width="100%">
        <thead>
          <tr>
            <TableHeader>Nº do contrato</TableHeader>
            <TableHeader>Data da contratação</TableHeader>
            <TableHeader>Vencimento da fatura</TableHeader>
            <TableHeader>Data do próximo ciclo</TableHeader>
            <TableHeader>Detalhes</TableHeader>
          </tr>
        </thead>

        <tbody>
          {queries.map(function (query) {
            return (
              <TableRow>
                <TableContent>{query.contractNumber}</TableContent>
                <TableContent>{query.contractDate}</TableContent>
                <TableContent>{`Dia ${query.dueDateDay}`}</TableContent>
                <TableContent>{query.nextCicleDate}</TableContent>
                <TableContent>
                  <DetailsLink href={query.detailsLink}>
                    Ver detalhes
                  </DetailsLink>
                </TableContent>
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </Content>
  );
}

export default DesktopQueriesView;
