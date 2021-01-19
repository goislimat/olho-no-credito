import Image from "next/image";
import styled from "styled-components";
import { typography } from "ui/theme";

const Content = styled.section`
  grid-area: categories;
`;

const Title = styled.h3``;

const CategoriesList = styled.ul``;

const CategoryItem = styled.li``;

const StyledImage = styled(Image)``;

const CategoryTitle = styled.h4``;

const ReadMore = styled.span``;

// const Content = styled.section`
//   margin-top: 24px;
// `;

// const Title = styled.h3`
//   font-family: ${typography.inter};
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 27px;
//   letter-spacing: -0.5px;
//   color: #30ac62;
//   margin-bottom: 16px;
// `;

// const CategoriesList = styled.ul`
//   display: grid;
//   row-gap: 16px;
//   list-style-type: none;
// `;

// const CategoryItem = styled.li`
//   display: grid;
//   grid-template-columns: 158px 1fr;
//   column-gap: 20px;

//   > div {
//     display: inline-grid;
//     box-sizing: border-box;
//     margin: 12px 0;
//   }
// `;

// const StyledImage = styled(Image)`
//   border-radius: 6px;
// `;

// const CategoryTitle = styled.h4`
//   font-size: 15px;
//   font-weight: 600;
//   line-height: 18px;
//   color: #686868;
// `;

// const ReadMore = styled.span`
//   font-family: ${typography.inter};
//   font-size: 15px;
//   line-height: 18px;
//   color: #2721f3;
// `;

interface Props {
  categories: {
    image: string;
    link: string;
    title: string;
  }[];
}

function Categories({ categories }: Props) {
  return (
    <Content>
      <Title>Categorias</Title>
      <CategoriesList>
        {categories.map(function (category) {
          return (
            <CategoryItem key={category.title}>
              <StyledImage
                src={category.image}
                alt="pontuação de crédito"
                width="158"
                height="103"
              />
              <div>
                <CategoryTitle>{category.title}</CategoryTitle>
                <ReadMore>Ler mais</ReadMore>
              </div>
            </CategoryItem>
          );
        })}
      </CategoriesList>
    </Content>
  );
}

export default Categories;
