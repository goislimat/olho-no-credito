import styled from "styled-components";

import DescriptiveIconType from "types/DescriptiveIcon";
import { Icon } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Card = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 15px;
  max-width: 205px;
  margin: 0 auto;

  ${breakpoints.desktop} {
    grid-template-columns: auto 1fr;
    column-gap: 16px;
    max-width: 100%;
  }
`;

const CardTextContent = styled.div`
  display: grid;
  row-gap: 15px;

  ${breakpoints.desktop} {
    row-gap: 0;
  }
`;

const Title = styled.h3`
  color: ${colors.gray};
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  ${breakpoints.desktop} {
    text-align: left;
  }
`;

const Description = styled.p`
  color: ${colors.gray};
  font-size: 15px;
  line-height: 19px;
  text-align: center;

  ${breakpoints.desktop} {
    text-align: left;
  }
`;

interface Props {
  item: DescriptiveIconType;
}

function DescriptiveIcon({ item: { iconName, title, description } }: Props) {
  return (
    <Card>
      <Icon name={iconName} />
      <CardTextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardTextContent>
    </Card>
  );
}

export default DescriptiveIcon;
