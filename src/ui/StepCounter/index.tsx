import { Fragment } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { colors, typography } from "ui/theme";

const Stepper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    color: ${colors.gray600};
  }

  .active {
    color: ${colors.green};
  }
`;

const ConnectLine = styled.div`
  width: 30px;
  border-bottom: 1px solid ${colors.gray100};
`;

interface Props {
  numberOfSteps: number;
  currentActiveStep: number;
}

function StepCounter({ numberOfSteps, currentActiveStep }: Props) {
  return (
    <Stepper>
      {[...Array(numberOfSteps)].map(function (step, index) {
        return (
          <Fragment key={uuid()}>
            <span className={currentActiveStep === index + 1 ? "active" : ""}>
              {index + 1}
            </span>
            {index < numberOfSteps - 1 && <ConnectLine />}
          </Fragment>
        );
      })}
    </Stepper>
  );
}

export default StepCounter;
