import styled from "styled-components";

import { Navbar } from "ui";
import { colors } from "ui/theme";
import { Hero } from "./components";

const Content = styled.div`
  background: ${colors.grayGradient};
`;

function Login() {
  return (
    <>
      <Navbar />
      <Content>
        <Hero />
      </Content>
    </>
  );
}

export default Login;
