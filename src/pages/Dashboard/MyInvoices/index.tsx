import styled from "styled-components";
import { ActivePlanCard } from "ui";
import InvoicesTable from "ui/InvoicesTable";
import { breakpoints } from "ui/theme";

const Content = styled.div`
  padding: 0 20px;
`;

const QueriesInfo = styled.div`
  display: grid;
  grid-template-areas:
    "card"
    "invoices";

  ${breakpoints.desktop} {
    grid-template-areas: "card invoices";
    grid-template-columns: 1fr 3fr;
    column-gap: 32px;
    max-width: 1212px;
    margin: 0 auto;
  }
`;

interface Props {
  fields: {
    name?: string;
    type: "text" | "full-bottom-link" | "link";
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
      name: "Criação",
      type: "text",
    },
    {
      name: "Fechamento",
      type: "text",
    },
    {
      name: "Consumo",
      type: "text",
    },
    {
      name: "Status",
      type: "text",
    },
    {
      name: "Pagamento",
      type: "link",
      columnText: "Ver boleto",
    },
    {
      name: "Fatura",
      type: "link",
      columnText: "Ver detalhe",
    },
    {
      name: "Notas fiscais",
      type: "link",
      columnText: "Baixar NF",
    },
  ],
  data: [
    {
      values: [
        "22/04/2020",
        "22/05/2020",
        "R$ 100,00",
        "Aberto",
        "#",
        "#",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020",
        "22/05/2020",
        "R$ 100,00",
        "Aberto",
        "#",
        "#",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020",
        "22/05/2020",
        "R$ 100,00",
        "Aberto",
        "#",
        "#",
        "#",
      ],
    },
    {
      values: [
        "22/04/2020",
        "22/05/2020",
        "R$ 100,00",
        "Aberto",
        "#",
        "#",
        "#",
      ],
    },
  ],
};

function MyInvoices() {
  return (
    <Content>
      <div>Navbar</div>
      <QueriesInfo>
        <ActivePlanCard />
        <InvoicesTable queries={DATA} />
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default MyInvoices;
