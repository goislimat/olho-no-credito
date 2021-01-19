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

const POSTS = [];

const PINNED_POST = {};

const CATEGORIES = [
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Conheça tudo sobre as consultas PJ",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Conheça tudo sobre as consultas PF",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Conheça tudo sobre a recuperação de dívidas",
  },
];

function Blog() {
  return (
    <Content>
      <Title />
      <PinnedContent>
        <PinnedPost />
        <SearchContainer>
          <SearchBar />
          <Categories categories={CATEGORIES} />
        </SearchContainer>
      </PinnedContent>
      <Posts />
      <Pagination />
    </Content>
  );
}

export default Blog;
