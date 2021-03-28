import styled, { css } from "styled-components";
import { colors } from "ui/theme";

interface Props {
  color: "red" | "green";
}

const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-radius: 10px 10px 0px 0px;

  ${({ color }) =>
    css`
      ${/^red$/i.test(color) &&
      css`
        background: ${colors.titleContainerRedGradient};
      `}
      ${/^green$/i.test(color) &&
      css`
        background: ${colors.titleContainerGreenGradient};
      `}
    `}
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: white;
`;

function TitleContainer({ text, color }: any) {
  return (
    <Container color={color}>
      <Text>{text}</Text>
    </Container>
  );
}

export default TitleContainer;
