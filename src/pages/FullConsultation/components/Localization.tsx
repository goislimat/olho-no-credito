import styled from "styled-components";
import { colors, breakpoints } from "ui/theme";

import { TitleContainer } from "pages/FullConsultation/components";

import { Container } from "./styles";

const LocalizationContainer = styled.div`
  display: flex;
  margin: 78px 0;
`;

function Localization() {
  return (
    <Container>
      <TitleContainer text="Localização" color="green" />
      <LocalizationContainer></LocalizationContainer>
    </Container>
  );
}

export default Localization;
