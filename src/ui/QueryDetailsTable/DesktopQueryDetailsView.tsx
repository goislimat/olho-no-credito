import { formatWithZeros } from "helpers/numberFormat";
import styled, { css } from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 80px;
    padding: 48px 32px;
    box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DetailsTag = styled.span`
  font-family: ${typography.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  color: #686868;
`;

const QueryId = styled.span`
  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #94a2b3;

  display: inline-block;
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 5px;
  margin-left: 24px;
`;

const TableHeader = styled.th`
  background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
  border-radius: 15px 15px 0px 0px;
  padding: 16px;
  color: white;

  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
`;

const TableCell = styled.td`
  background: #e5e5e5;
  text-align: center;
  padding: 40px 0;

  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #838383;
`;

const ControlsContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  column-gap: 20px;
  justify-items: end;
`;

interface ButtonProps {
  color: "green" | "red" | "blue" | "purple";
}

const Button = styled.button<ButtonProps>`
  ${({ color }) => css`
    display: grid;
    place-content: center center;
    width: 176px;
    height: 54px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    cursor: pointer;

    font-family: ${typography.roboto};
    font-size: 13px;
    font-weight: 600;
    line-height: 29px;

    color: white;

    ${color === "green" &&
    css`
      background: linear-gradient(180deg, #69ed47 0%, #31cf52 100%);
    `}

    ${color === "red" &&
    css`
      background: #ff0120;
    `}

    ${color === "blue" &&
    css`
      background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
    `}

    ${color === "purple" &&
    css`
      background: #4c4094;
    `}
  `}
`;

interface Props {
  queryDetails: {
    productName: string;
    numberOfQueries: number;
    usedQueriesCount: number;
  };
  openCancelModal: () => void;
}

function DesktopQueryDetailsView({ queryDetails, openCancelModal }: Props) {
  const { productName, numberOfQueries, usedQueriesCount } = queryDetails;

  return (
    <Content>
      <DetailsContainer>
        <DetailsTag>Detalhes:</DetailsTag>
        <QueryId>{productName}</QueryId>
      </DetailsContainer>

      <table width="100%">
        <thead>
          <tr>
            <TableHeader>Nome do Produto</TableHeader>
            <TableHeader>Quantidade de consultas contratadas</TableHeader>
            <TableHeader>Quantidade de consultas consumidas</TableHeader>
          </tr>
        </thead>

        <tbody>
          <tr>
            <TableCell>{productName}</TableCell>
            <TableCell>{`${formatWithZeros(
              numberOfQueries
            )} consultas no mês`}</TableCell>
            <TableCell>{formatWithZeros(usedQueriesCount)}</TableCell>
          </tr>
        </tbody>
      </table>

      <ControlsContainer>
        <Button color="green">Ver contrato</Button>
        <Button color="red" onClick={openCancelModal}>
          Cancelar contrato
        </Button>
        <Button color="blue">Condições comerciais</Button>
        <Button color="purple">Downloads de dados</Button>
      </ControlsContainer>
    </Content>
  );
}

export default DesktopQueryDetailsView;
