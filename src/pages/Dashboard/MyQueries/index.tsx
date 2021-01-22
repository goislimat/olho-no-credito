import styled from "styled-components";
import { ActivePlanCard, QueriesTable } from "ui";
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

const DATA = {
  fields: [
    {
      name: "Nº do contrato",
      type: "text",
    },
    {
      name: "Data da contratação",
      type: "text",
    },
    {
      name: "Vencimento da fatura",
      type: "text",
    },
    {
      name: "Data do próximo ciclo",
      type: "text",
    },
  ],
  data: [
    {
      values: ["ONC - C20202 - 01895", "23/04/2020", "Dia 25", "23/05/2020"],
      actions: [
        {
          name: "Ver detalhes",
          type: "full-bottom-link",
          action: "#",
        },
      ],
    },
    {
      values: ["ONC - C20202 - 01895", "23/04/2020", "Dia 25", "23/05/2020"],
      actions: [
        {
          name: "Ver detalhes",
          type: "full-bottom-link",
          action: "#",
        },
      ],
    },
    {
      values: ["ONC - C20202 - 01895", "23/04/2020", "Dia 25", "23/05/2020"],
      actions: [
        {
          name: "Ver detalhes",
          type: "full-bottom-link",
          action: "#",
        },
      ],
    },
    {
      values: ["ONC - C20202 - 01895", "23/04/2020", "Dia 25", "23/05/2020"],
      actions: [
        {
          name: "Ver detalhes",
          type: "full-bottom-link",
          action: "#",
        },
      ],
    },
    {
      values: ["ONC - C20202 - 01895", "23/04/2020", "Dia 25", "23/05/2020"],
      actions: [
        {
          name: "Ver detalhes",
          type: "full-bottom-link",
          action: "#",
        },
      ],
    },
  ],
};

function MyQueries() {
  return (
    <Content>
      <div>Navbar</div>
      <QueriesInfo>
        <ActivePlanCard />
        <QueriesTable queries={DATA} />
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default MyQueries;
