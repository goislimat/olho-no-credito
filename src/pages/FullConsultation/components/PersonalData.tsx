import styled, { css } from "styled-components";
import { colors, breakpoints } from "ui/theme";

import { TitleContainer } from "pages/FullConsultation/components";

import { Container, Row, Col } from "./styles";

const MarginTop = styled.div`
  margin-top: 50px;

  ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

const ContainerPersonalData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 14px 23px;

  ${breakpoints.desktop} {
    margin: 17px 80px;
  }
`;

const Label = styled.p`
  display: block;
  font-size: 20px;
  color: ${colors.black};

  ${breakpoints.desktop} {
    font-size: 25px;
  }
`;

const Text = styled.p`
  display: block;
  font-size: 20px;
  color: ${colors.gray400};

  ${breakpoints.desktop} {
    font-size: 25px;
  }
`;

function PersonalData() {
  const data = [
    {
      label: `Nome`,
      text: `Teste Teste Teste`,
    },
    {
      label: `CPF`,
      text: `154.124.698-52`,
    },
    {
      label: `Sexo`,
      text: `Feminino`,
    },
  ];

  return (
    <MarginTop>
      <Container>
        <TitleContainer text="Dados pessoais" color="green" />
        <Row style={{ justifyContent: `start` }}>
          {data.map(({ label, text }) => (
            <Col
              col={6}
              style={{
                borderBottom: `2px solid #ECEEEF`,
              }}
            >
              <ContainerPersonalData>
                <Label>{label}</Label>
                <Text>{text}</Text>
              </ContainerPersonalData>
            </Col>
          ))}
        </Row>
      </Container>
    </MarginTop>
  );
}

export default PersonalData;
