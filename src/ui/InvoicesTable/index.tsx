import styled from "styled-components";
import { DesktopTable, MobileTable, Pagintaion } from "ui";
import Pagination from "ui/Pagination";
import InvoicesTableHeader from "./InvoicesTableHeader";

const Content = styled.div`
  grid-area: invoices;
  display: grid;
`;

interface Props {
  queries: {
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
  };
}

function InvoicesTable({ queries }: Props) {
  return (
    <Content>
      <MobileTable
        queries={queries}
        header={<InvoicesTableHeader />}
        pagination={<Pagintaion />}
      />
      <DesktopTable
        queries={queries}
        header={<InvoicesTableHeader />}
        pagination={<Pagination />}
        minimalist
      />
    </Content>
  );
}

export default InvoicesTable;
