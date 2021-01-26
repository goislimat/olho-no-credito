import styled from "styled-components";
import { MobileTable } from "ui";
import DesktopTable from "ui/DesktopTable";
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
}

function QueriesTable({ queries }: Props) {
  return (
    <Content>
      <MobileTable queries={queries} />
      <DesktopTable queries={queries} />
    </Content>
  );
  // return (
  //   <Content>
  //     <MobileQueriesView queries={queries} />
  //     <DesktopQueriesView queries={queries} />
  //   </Content>
  // );
}

export default QueriesTable;
