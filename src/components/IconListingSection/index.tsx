import styled from "styled-components";

import DescriptiveIconType from "types/DescriptiveIcon";
import { DescriptiveIcon } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Container = styled.section`
  display: grid;
  row-gap: 76px;
  padding-bottom: 50px;

  ${breakpoints.desktop} {
    max-width: 1200px;
    grid-template-columns: 215px 270px 270px 200px;
    column-gap: 80px;
    row-gap: 0;
    margin: 0 auto;
    padding: 40px 0;
  }
`;

const Title = styled.h2`
  color: ${colors.green};
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  margin: 50px 40px 0;
  text-align: center;

  ${breakpoints.desktop} {
    display: none;
  }
`;

interface Props {
  sectionTitle: string;
  items: DescriptiveIconType[];
}

function IconListingSection({ sectionTitle, items }: Props) {
  return (
    <Container>
      <Title>{sectionTitle}</Title>

      {items.map(function (item) {
        return <DescriptiveIcon item={item} key={item.title} />;
      })}
    </Container>
  );
}

export default IconListingSection;
