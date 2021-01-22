import styled from "styled-components";
import { MobileTable } from "ui";
import { breakpoints } from "ui/theme";
import DesktopQueriesView from "./DesktopQueriesView";
import MobileQueriesView from "./MobileQueriesView";

const Content = styled.div`
  grid-area: queries;
  display: grid;
  row-gap: 40px;
  margin: 56px 0;

  ${breakpoints.desktop} {
    display: grid;
  }
`;

interface Props {
  queries: {
    fields: {
      name: string;
      type: string;
    }[];
    data: {
      values: string[];
      actions?: {
        name: string;
        type: string;
        action: any;
      }[];
    }[];
  };
}

function QueriesTable({ queries }: Props) {
  return (
    <Content>
      <MobileTable queries={queries} />
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
