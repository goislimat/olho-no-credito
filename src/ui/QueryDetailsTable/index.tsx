import styled, { css } from "styled-components";
import { DesktopTable, MobileTable } from "ui";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  grid-area: queries;

  ${breakpoints.desktop} {
    display: grid;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  row-gap: 24px;
  padding: 32px;

  ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
  }
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

    ${breakpoints.desktop} {
      height: 43px;
      font-family: ${typography.inter};
      font-size: 13px;
      font-weight: 600;
      line-height: 29px;
    }

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
  queries: {
    fields: {
      name?: string;
      type: "text" | "full-bottom-link";
      mobile?: {
        columnName?: string;
        rowLabel: string;
      };
      desktop?: {
        columnName: string;
        rowLabel: string;
      };
    }[];
    data: {
      values: string[];
    }[];
  };
  openCancelModal: () => void;
}

function QueryDetailsTable({ queries, openCancelModal }: Props) {
  const renderActions = () => (
    <ButtonContainer>
      <Button color="green" onClick={() => {}}>
        Ver contrato
      </Button>
      <Button color="red" onClick={openCancelModal}>
        Cancelar contrato
      </Button>
      <Button color="blue" onClick={() => {}}>
        Condições comerciais
      </Button>
      <Button color="purple" onClick={() => {}}>
        Downloads de dados
      </Button>
    </ButtonContainer>
  );

  return (
    <Content>
      <MobileTable queries={queries}>{renderActions()}</MobileTable>
      <DesktopTable queries={queries}>{renderActions()}</DesktopTable>
    </Content>
  );
}

export default QueryDetailsTable;
