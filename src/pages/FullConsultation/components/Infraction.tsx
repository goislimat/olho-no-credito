import styled from "styled-components";
import { colors, breakpoints } from "ui/theme";

const InfractionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${colors.red300};
  padding: 0 20%;
`;

const Text = styled.span`
  font-family: Inter, sans-serif;
  font-size: 23px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

function Infraction() {
  return (
    <InfractionContainer>
      <Text>ATENÇÃO ESSE CPF POSSUI 4 PENDÊNCIAS FINANCEIRAS</Text>
    </InfractionContainer>
  );
}

export default Infraction;
