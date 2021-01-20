import styled from "styled-components";
import { ActivePlanCard } from "ui";
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

const TempQueries = styled.div`
  grid-area: queries;
`;

function MyQueries() {
  return (
    <Content>
      <div>Navbar</div>
      <QueriesInfo>
        <ActivePlanCard />
        <TempQueries>My queries</TempQueries>
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default MyQueries;
