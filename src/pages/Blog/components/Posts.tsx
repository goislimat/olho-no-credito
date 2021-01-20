import Image from "next/image";
import styled from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.section`
  padding: 56px 0;
`;

const Title = styled.h3`
  font-family: ${typography.inter};
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.5px;
  color: #30c43e;
  margin-bottom: 32px;
`;

const PostsList = styled.ul`
  list-style-type: none;
  display: grid;
  row-gap: 40px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px 20px;
  }
`;

const PostItem = styled.li``;

const PostImage = styled(Image)`
  border-radius: 6px;
`;

const PostTitle = styled.h4`
  font-family: ${typography.inter};
  font-size: 15px;
  font-weight: 600;
  line-height: 17px;
  color: #777777;
  margin: 16px 0;
`;

const PostSubtitle = styled.p`
  font-family: ${typography.inter};
  font-size: 13px;
  line-height: 17px;
  color: #94a2b3;
`;

interface Props {
  posts: {
    image: string;
    link: string;
    title: string;
    subtitle: string;
  }[];
}

function Posts({ posts }: Props) {
  return (
    <Content>
      <Title>Recentes</Title>

      <PostsList>
        {posts.map(function (post) {
          return (
            <PostItem key={post.title}>
              <PostImage
                src={post.image}
                alt="imagem da postagem"
                width="382"
                height="248"
              />
              <PostTitle>{post.title}</PostTitle>
              <PostSubtitle>{post.subtitle}</PostSubtitle>
            </PostItem>
          );
        })}
      </PostsList>
    </Content>
  );
}

export default Posts;
