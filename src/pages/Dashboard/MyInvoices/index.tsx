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

function MyInvoices() {
  return (
    <Content>
      <div>Navbar</div>
      <QueriesInfo>
        <ActivePlanCard />
        <InvoicesTable />
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default MyInvoices;
