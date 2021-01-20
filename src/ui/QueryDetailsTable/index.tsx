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

function QueryDetailsTable() {
  return (
    <Content>
      <MobileQueryDetailsView />
      <DesktopQueryDetailsView />
    </Content>
  );
}

export default QueryDetailsTable;
