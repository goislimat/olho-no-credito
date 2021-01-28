import monthsOfTheYear from "helpers/monthsOfTheYear";
import styled from "styled-components";
import { Input, Select } from "ui";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  max-width: 210px;
  margin: 0 auto;

  ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    max-width: 100%;
    margin: 0 0 40px 0;
  }
`;

const SearchContainer = styled.div`
  display: grid;
  row-gap: 8px;
  margin-bottom: 32px;

  ${breakpoints.desktop} {
    grid-template-columns: auto 1fr;
    column-gap: 24px;
    align-items: center;
    margin: 0 24px 0 0;
  }
`;

const RangeContainer = styled.div`
  display: grid;
  row-gap: 8px;

  ${breakpoints.desktop} {
    grid-template-columns: auto 1fr;
    column-gap: 24px;
    align-items: center;
    margin: 0 24px 0 0;
  }
`;

const Label = styled.span`
  display: block;
  font-family: ${typography.inter};
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: #686868;
  text-transform: uppercase;
`;

function InvoicesTableHeader() {
  return (
    <Content>
      <SearchContainer>
        <Label>Buscar:</Label>
        <Input placeholder="Filtrar resultados" hasError={false} />
      </SearchContainer>
      <RangeContainer>
        <Label>Período:</Label>
        <Select values={monthsOfTheYear} />
      </RangeContainer>
    </Content>
  );
}

export default InvoicesTableHeader;
