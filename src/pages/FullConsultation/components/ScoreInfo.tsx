import React, { useState } from "react";
import styled from "styled-components";
import { colors, breakpoints } from "ui/theme";

import { IconExclamation } from "pages/FullConsultation/components";

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 47px auto;
  flex-direction: column;

  ${breakpoints.desktop} {
    margin: 36px auto;
  }
`;

const ScoreInfoContainer = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  padding-top: 10px;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: ${colors.gray400};

  ${breakpoints.desktop} {
    font-size: 24px;
  }
`;

function ScoreInfo() {
  const [size, setSize] = useState(57);

  React.useEffect(() => {
    if (window !== undefined && window?.innerWidth > 1024) {
      setSize(97);
    } else {
      setSize(57);
    }
  }, []);

  return (
    <Container>
      <ScoreInfoContainer>
        <IconExclamation size={size} />
        <Text>
          Score é uma pontuação que vai de 300 a 1000. Quanto mais alta, maior a
          chance do consumidor pagar seus compromissos financeiros.
        </Text>
      </ScoreInfoContainer>
    </Container>
  );
}

export default ScoreInfo;
