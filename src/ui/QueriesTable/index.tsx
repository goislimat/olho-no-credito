import styled from "styled-components";
import { breakpoints } from "ui/theme";
import DesktopQueriesView from "./DesktopQueriesView";
import MobileQueriesView from "./MobileQueriesView";

const Content = styled.div`
  grid-area: queries;

  ${breakpoints.desktop} {
    display: grid;
  }
`;

interface Props {
  queries: {
    contractNumber: string;
    contractDate: string;
    dueDateDay: number;
    nextCicleDate: string;
    detailsLink: string;
  }[];
}

function QueriesTable({ queries }: Props) {
  return (
    <Content>
      <MobileQueriesView queries={queries} />
      <DesktopQueriesView queries={queries} />
    </Content>
  );
}

export default QueriesTable;
