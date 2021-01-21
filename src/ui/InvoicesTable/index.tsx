import styled from "styled-components";
import MobileInvoicesView from "./MobileInvoicesView";

const Content = styled.div`
  grid-area: invoices;
`;

function InvoicesTable() {
  return (
    <Content>
      <MobileInvoicesView
        invoices={[
          {
            createdAt: "22/05/2020",
            closedAt: "22/05/2020",
            priceInCents: 100,
            status: "Aberto",
            paymentLink: "#",
            invoiceLink: "#",
            invoiceDocumentLink: "#",
          },
        ]}
      />
    </Content>
  );
}

export default InvoicesTable;
