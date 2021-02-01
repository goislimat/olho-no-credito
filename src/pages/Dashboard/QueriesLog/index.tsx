import styled from "styled-components";
import { ActivePlanCard, LoggedNavbar, QueriesTable } from "ui";
import QueriesLogTable from "ui/QueriesLogTable";
import { breakpoints } from "ui/theme";

const Content = styled.div`
  padding: 0 20px;
`;

const QueriesInfo = styled.div`
  display: grid;
  grid-template-areas:
    "card"
    "queries";

  ${breakpoints.desktop} {
    grid-template-areas: "card queries";
    grid-template-columns: 1fr 3fr;
    column-gap: 32px;
    max-width: 1212px;
    margin: 0 auto;
  }
`;

interface Props {
  fields: {
    name?: string;
    type: "text" | "full-bottom-link" | "link" | "status";
    columnText?: string;
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
}

const DATA: Props = {
  fields: [
    {
      name: "Data e Hora",
      type: "text",
    },
    {
      name: "Cliente",
      type: "text",
    },
    {
      name: "Tipo de consulta",
      type: "text",
    },
    {
      name: "Chave de consulta",
      type: "text",
    },
    {
      name: "Status",
      type: "status",
    },
    {
      name: "Visuzalizar consulta",
      type: "link",
      columnText: "Vizualizar",
    },
  ],
  data: [
    {
      values: [
        "22/04/2020 16:48",
        "Bárbara Mellina",
        "XPTO",
        "CPA - 0123",
        "Sucesso",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020 16:48",
        "Bárbara Mellina",
        "XPTO",
        "CPA - 0123",
        "Sucesso",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020 16:48",
        "Bárbara Mellina",
        "XPTO",
        "CPA - 0123",
        "Sucesso",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020 16:48",
        "Bárbara Mellina",
        "XPTO",
        "CPA - 0123",
        "Sucesso",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020 16:48",
        "Bárbara Mellina",
        "XPTO",
        "CPA - 0123",
        "Sucesso",
        "#",
      ],
    },
  ],
};

function QueriesLog() {
  return (
    <Content>
      <LoggedNavbar />
      <QueriesInfo>
        <ActivePlanCard />
        <QueriesLogTable queries={DATA} />
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default QueriesLog;
