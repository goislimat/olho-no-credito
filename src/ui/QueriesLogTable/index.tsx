import styled from "styled-components";
import { DesktopTable } from "ui";
import InvoicesTableHeader from "ui/InvoicesTable/InvoicesTableHeader";
import MobileTable from "ui/MobileTable";
import Pagination from "ui/Pagination";
import { breakpoints } from "ui/theme";

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
      type: "text" | "full-bottom-link" | "link" | "status";
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
  };
}

function QueriesLogTable({ queries }: Props) {
  return (
    <Content>
      <MobileTable
        queries={queries}
        header={<InvoicesTableHeader />}
        pagination={<Pagination />}
      />
      <DesktopTable
        minimalist
        queries={queries}
        header={<InvoicesTableHeader />}
        pagination={<Pagination />}
      />
    </Content>
  );
}

export default QueriesLogTable;
