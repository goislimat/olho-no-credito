import { Input } from "ui";

function SearchBar() {
  return (
    <Input
      id="search"
      name="search"
      type="text"
      placeholder="Buscar conteúdo"
      icon="search"
      round
      hasError={false}
    />
  );
}

export default SearchBar;
