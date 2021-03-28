import styled from "styled-components";
import { colors } from "ui/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);
`;

const DownArrow = styled.div`
  border: solid ${colors.green700};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: ${colors.green600};
`;

function ToKnowMore() {
  return (
    <Container>
      <Button>
        <Text>SAIBA MAIS</Text>
        <div>
          <DownArrow />
        </div>
      </Button>
    </Container>
  );
}

export default ToKnowMore;
