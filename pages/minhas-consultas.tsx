import FullConsultation from "pages/FullConsultation";

import styled from "styled-components";
import { colors } from "ui/theme";

const Container = styled.div`
  background: ${colors["gray200"]};
`;

function MinhasConsultas() {
  return (
    <Container>
      <FullConsultation />
    </Container>
  );
}

export default MinhasConsultas;
