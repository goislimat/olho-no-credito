import styled from "styled-components";
import {
  Categories,
  Pagination,
  PinnedPost,
  Posts,
  SearchBar,
  Title,
} from "./components";

const Content = styled.div`
  max-width: 1212px;
  margin: 0 auto;
`;

const PinnedContent = styled.section`
  display: inline-grid;
  grid-auto-flow: column;
  column-gap: 80px;
`;

const SearchContainer = styled.div`
  width: 410px;
`;

function Blog() {
  return (
    <Content>
      <Title />
      <PinnedContent>
        <PinnedPost />
        <SearchContainer>
          <SearchBar />
          <Categories />
        </SearchContainer>
      </PinnedContent>
      <Posts />
      <Pagination />
    </Content>
  );
}

export default Blog;
