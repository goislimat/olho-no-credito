import styled from "styled-components";
import { Button, Icon, Input } from "ui";
import { colors, typography } from "ui/theme";
import PageTemplate from "../components/PageTemplate";

const Form = styled.form`
  display: grid;
  row-gap: 35px;
`;

const Divider = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 8px;

  div {
    border-top: 1px solid #c4c4c4;
    height: 0;
  }

  span {
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;

const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: ${colors.gray300};
    margin-top: 32px;
  }
`;

function TryFreeStep4() {
  return (
    <PageTemplate
      currentStep={4}
      stepTitle="Insira um documento com foto CNH ou RG"
      showQueryResultInfo
    >
      <Form>
        <DropArea>
          <Icon name="dropPhoto" />
          <p>Arraste fotos pra cá</p>
        </DropArea>

        <Divider>
          <div></div>
          <span>ou</span>
          <div></div>
        </Divider>

        <Input placeholder="Selecione fotos do computador" />

        <Button
          background="blueGradient"
          uppercase
          padding="12px"
          width="100%"
          margin-top="50px"
          onClick={() => {}}
        >
          Finalizar
        </Button>
      </Form>
    </PageTemplate>
  );
}

export default TryFreeStep4;
