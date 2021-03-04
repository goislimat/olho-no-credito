import styled from "styled-components";
import { LoggedNavbar } from "ui";

import { InfoContainer } from "./components";

const Content = styled.div`
  padding: 0 20px;
`;

function DeleteAccount() {
  return (
    <Content>
      <LoggedNavbar />
      <InfoContainer />
      <div>Footer</div>
    </Content>
  );
}

export default DeleteAccount;
