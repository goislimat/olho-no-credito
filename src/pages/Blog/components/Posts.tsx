import Image from "next/image";
import styled from "styled-components";
import { typography } from "ui/theme";

const Content = styled.section``;

const Title = styled.h3``;

const PostsList = styled.ul``;

const PostItem = styled.li``;

const PostImage = styled(Image)``;

const PostTitle = styled.h4``;

const PostSubtitle = styled.p``;

// const Content = styled.section`
//   padding: 40px 0;
// `;

// const Title = styled.h3`
//   font-family: ${typography.inter};
//   font-size: 30px;
//   font-weight: 600;
//   line-height: 36px;
//   color: #686868;
//   margin-bottom: 40px;
// `;

// const PostsList = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 40px 20px;
//   padding: 0;
//   margin: 0;
//   list-style-type: none;
// `;

// const PostItem = styled.li``;

// const PostImage = styled(Image)`
//   border-radius: 6px;
// `;

// const PostTitle = styled.h4`
//   font-family: ${typography.inter};
//   font-size: 25px;
//   font-weight: 600;
//   line-height: 30px;
//   letter-spacing: 0.02em;
//   margin: 16px 0;
//   color: #777777;
// `;

// const PostSubtitle = styled.p`
//   font-size: 18px;
//   line-height: 25px;
//   color: #94a2b3;
// `;

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
