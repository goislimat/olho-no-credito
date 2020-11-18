import styled, { css } from "styled-components";
import { breakpoints, colors } from "ui/theme";

interface ContainerProps {
  numberOfButtons: number;
}

interface ButtonProps {
  first: boolean;
  last: boolean;
  active: boolean;
  onClick: () => void;
}

const Container = styled.div<ContainerProps>`
  ${({ numberOfButtons }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${numberOfButtons}, 1fr);

    ${breakpoints.desktop} {
      max-width: 880px;
      margin: 0 auto;
    }
  `}
`;

const Button = styled.button<ButtonProps>`
  ${({ first, last, active }) => css`
    font-family: Roboto, sans-serif;
    border: 1px solid ${active ? "transparent" : colors.gray300};
    border-radius: ${first ? "5px 0 0 5px" : last ? "0 5px 5px 0" : "0"};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    height: 54px;
    color: ${active ? colors.white : colors.blue400};
    background: ${active ? colors.blueGradient : "transparent"};
    outline: 0;

    ${first && "border-right: 0;"}
    ${last && "border-left: 0;"}

    ${breakpoints.desktop} {
      font-size: 17px;
      line-height: 29px;
    }
  `}
`;

interface Props {
  buttons: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

function ButtonGroup({ buttons, activeIndex, setActiveIndex }: Props) {
  const buttonsLength = buttons.length;
  const last = buttonsLength - 1;

  function isFirst(index: number): boolean {
    return index === 0;
  }

  function isLast(index: number): boolean {
    return index === last;
  }

  return (
    <Container numberOfButtons={buttonsLength}>
      {buttons.map(function (button, index) {
        return (
          <Button
            key={button}
            first={isFirst(index)}
            last={isLast(index)}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {button}
          </Button>
        );
      })}
    </Container>
  );
}

export default ButtonGroup;
