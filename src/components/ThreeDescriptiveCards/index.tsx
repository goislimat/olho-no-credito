import styled from "styled-components";

import { colors, breakpoints } from "ui/theme";

const Container = styled.section`
  padding: 0 20px;
  display: grid;

  ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 46px;
    max-width: 1084px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 2%;
  text-align: center;
  margin: 0 30px 96px;
  color: ${colors.gray};

  ${breakpoints.desktop} {
    max-width: 480px;
    font-size: 35px;
    line-height: 42px;
    margin: 0 auto 96px;
  }
`;

const Card = styled.article`
  display: grid;
  row-gap: 8px;
  margin-bottom: 76px;
  text-align: center;

  img {
    margin-bottom: 28px;
    max-width: 70%;
  }

  ${breakpoints.desktop} {
    img {
      max-width: 100%;
    }
  }
`;

const CardTitle = styled.h3`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: ${colors.gray};
  margin-bottom: 28px;

  ${breakpoints.desktop} {
    text-align: left;
  }
`;

const CardDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5%;
  text-align: justify;
  color: ${colors.gray300};

  ${breakpoints.desktop} {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: auto;
  }
`;

interface Props {
  sectionTitle: string;
  items: {
    photoURL: string;
    photoDescription: string;
    title: string;
    description: string;
  }[];
}

function ThreeDescritiveCards({ sectionTitle, items }: Props) {
  return (
    <>
      <Title>{sectionTitle}</Title>
      <Container>
        {items.map(function ({
          photoURL,
          photoDescription,
          title,
          description,
        }) {
          return (
            <Card key={photoURL}>
              <header>
                <img src={photoURL} alt={photoDescription} />
                <CardTitle>{title}</CardTitle>
              </header>

              <CardDescription>{description}</CardDescription>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default ThreeDescritiveCards;
