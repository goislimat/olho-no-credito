import { Hero } from "pages/Auth/Signup/components";
import styled from "styled-components";

import { Navbar } from "ui";
import { colors } from "ui/theme";

const Content = styled.div`
  background: ${colors.grayGradient};
`;

function Signup() {
  return (
    <>
      <Navbar />
      <Content>
        <Hero />
      </Content>
    </>
  );
}

export default Signup;
