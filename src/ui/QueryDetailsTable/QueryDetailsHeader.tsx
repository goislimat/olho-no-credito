import styled from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.desktop} {
    justify-content: flex-start;
    margin-bottom: 40px;
  }
`;

const Label = styled.span`
  font-family: ${typography.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  color: #777;
`;

const ValueContainer = styled.span`
  font-family: ${typography.inter};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #92a2b3;

  display: block;
  margin-left: 16px;
  padding: 16px;
  border: 0.5px solid #686868;
  border-radius: 5px;
`;

interface Props {
  queryId: string;
}

function QueryDetailsHeader({ queryId }: Props) {
  return (
    <Content>
      <Label>Detalhes:</Label>
      <ValueContainer>{queryId}</ValueContainer>
    </Content>
  );
}

export default QueryDetailsHeader;
