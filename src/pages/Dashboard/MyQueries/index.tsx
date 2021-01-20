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

const QUERIES = [
  {
    contractNumber: "ONC - C2020-01895",
    contractDate: "23/04/2020",
    dueDateDay: 23,
    nextCicleDate: "23/05/2020",
    detailsLink: "#",
  },
  {
    contractNumber: "ONC - C2020-01895",
    contractDate: "25/04/2020",
    dueDateDay: 25,
    nextCicleDate: "25/05/2020",
    detailsLink: "#",
  },
  {
    contractNumber: "ONC - C2020-01895",
    contractDate: "26/04/2020",
    dueDateDay: 26,
    nextCicleDate: "26/05/2020",
    detailsLink: "#",
  },
  {
    contractNumber: "ONC - C2020-01895",
    contractDate: "27/04/2020",
    dueDateDay: 27,
    nextCicleDate: "27/05/2020",
    detailsLink: "#",
  },
  {
    contractNumber: "ONC - C2020-01895",
    contractDate: "28/04/2020",
    dueDateDay: 28,
    nextCicleDate: "28/05/2020",
    detailsLink: "#",
  },
];

function MyQueries() {
  return (
    <Content>
      <div>Navbar</div>
      <QueriesInfo>
        <ActivePlanCard />
        <QueriesTable queries={QUERIES} />
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default MyQueries;
