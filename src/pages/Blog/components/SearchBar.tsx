import styled from "styled-components";
import { Input } from "ui";

const Content = styled.div`
  grid-area: search;
  padding: 0 24px;
`;

function SearchBar() {
  return (
    <Content>
      <Input
        id="search"
        name="search"
        type="text"
        placeholder="Buscar conteúdo"
        icon="search"
        round
        hasError={false}
      />
    </Content>
  );
}

export default SearchBar;
