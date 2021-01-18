import {
  Categories,
  Pagination,
  PinnedPost,
  Posts,
  SearchBar,
  Title,
} from "./components";

function Blog() {
  return (
    <>
      <Title />
      <PinnedPost />
      <SearchBar />
      <Categories />
      <Posts />
      <Pagination />
    </>
  );
}

export default Blog;
