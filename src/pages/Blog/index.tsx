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
    <div>
      <Title />
      <PinnedPost />
      <SearchBar />
      <Categories />
      <Posts />
      <Pagination />
    </div>
  );
}

export default Blog;
