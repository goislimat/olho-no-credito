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
  openCancelModal: () => void;
}

function QueryDetailsTable({ openCancelModal }: Props) {
  return (
    <Content>
      <MobileQueryDetailsView openCancelModal={openCancelModal} />
      <DesktopQueryDetailsView openCancelModal={openCancelModal} />
    </Content>
  );
}

export default QueryDetailsTable;
