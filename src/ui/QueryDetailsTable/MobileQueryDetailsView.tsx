import { formatWithZeros } from "helpers/numberFormat";
import styled, { css } from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  ${breakpoints.desktop} {
    display: none;
  }
`;

const DetailsContainer = styled.div`
  margin: 80px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsTag = styled.span`
  font-family: ${typography.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  color: #777;
  text-transform: uppercase;
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

const Card = styled.div`
  background: white;
  box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 40px;
  padding: 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #f2f2f2;
  }
`;

const RowLabel = styled.span`
  align-self: center;

  font-family: ${typography.roboto};
  font-size: 15px;
  line-height: 19px;
  color: #686868;
`;

const RowValue = styled.span`
  align-self: center;
  justify-self: end;

  font-family: ${typography.roboto};
  font-size: 15px;
  line-height: 19px;
  color: #94a2b3;
`;

const ControlsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 16px;
  padding: 24px 24px 48px;
`;

interface ButtonProps {
  color: "green" | "red" | "blue" | "purple";
}

const Button = styled.button<ButtonProps>`
  ${({ color }) => css`
    display: grid;
    place-content: center center;
    width: 100%;
    height: 54px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    cursor: pointer;

    font-family: ${typography.roboto};
    font-size: 18px;
    font-weight: 700;
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

function MobileQueryDetailsView({ queryDetails, openCancelModal }: Props) {
  const { productName, numberOfQueries, usedQueriesCount } = queryDetails;

  return (
    <Content>
      <DetailsContainer>
        <DetailsTag>Detalhes:</DetailsTag>
        <QueryId>{productName}</QueryId>
      </DetailsContainer>

      <Card>
        <CardRow>
          <RowLabel>Nome do produto</RowLabel>
          <RowValue>{productName}</RowValue>
        </CardRow>
        <CardRow>
          <RowLabel>Quantidade de consultas contratadas</RowLabel>
          <RowValue>{`${formatWithZeros(
            numberOfQueries
          )} cons. no mês`}</RowValue>
        </CardRow>
        <CardRow>
          <RowLabel>Quantidade de consultas consumidas</RowLabel>
          <RowValue>{formatWithZeros(usedQueriesCount)}</RowValue>
        </CardRow>

        <ControlsContainer>
          <Button color="green">Ver contrato</Button>
          <Button color="red" onClick={openCancelModal}>
            Cancelar contrato
          </Button>
          <Button color="blue">Condições comerciais</Button>
          <Button color="purple">Download de dados</Button>
        </ControlsContainer>
      </Card>
    </Content>
  );
}

export default MobileQueryDetailsView;
