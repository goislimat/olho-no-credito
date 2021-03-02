import styled from "styled-components";
import { ActivePlanCard, LoggedNavbar } from "ui";
import { breakpoints } from "ui/theme";
import { PersonalDataForm } from "./components";

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

function MyQueries() {
  return (
    <Content>
      <LoggedNavbar />
      <QueriesInfo>
        <ActivePlanCard />
        <PersonalDataForm />
      </QueriesInfo>
      <div>Newsletter</div>
      <div>FAQ</div>
      <div>Footer</div>
    </Content>
  );
}

export default MyQueries;
