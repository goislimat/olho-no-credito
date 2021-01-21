import styled from "styled-components";
import { breakpoints } from "ui/theme";
import DesktopQueryDetailsView from "./DesktopQueryDetailsView";
import MobileQueryDetailsView from "./MobileQueryDetailsView";

const Content = styled.div`
  grid-area: queries;

  ${breakpoints.desktop} {
    display: grid;
  }
`;

interface Props {
  queryDetails: {
    productName: string;
    numberOfQueries: number;
    usedQueriesCount: number;
  };
  openCancelModal: () => void;
}

function QueryDetailsTable({ queryDetails, openCancelModal }: Props) {
  return (
    <Content>
      <MobileQueryDetailsView
        queryDetails={queryDetails}
        openCancelModal={openCancelModal}
      />
      <DesktopQueryDetailsView
        queryDetails={queryDetails}
        openCancelModal={openCancelModal}
      />
    </Content>
  );
}

export default QueryDetailsTable;
