import { FooterWithoutForm } from "sharedSections";
import styled from "styled-components";
import { Navbar } from "ui";
import {
  Categories,
  Pagination,
  PinnedPost,
  Posts,
  SearchBar,
  Title,
} from "./components";

const Content = styled.div`
  padding: 60px 20px;
`;

const PinnedContent = styled.section`
  display: grid;
  grid-template-areas:
    "search"
    "post"
    "categories";
  row-gap: 32px;
`;

// const Content = styled.div`
//   max-width: 1212px;
//   margin: 0 auto;
// `;

// const PinnedContent = styled.section`
//   display: inline-grid;
//   grid-auto-flow: column;
//   column-gap: 80px;
// `;

// const SearchContainer = styled.div`
//   width: 410px;
// `;

const POSTS = [
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Entenda as faixas de score da Olho no crédito",
    subtitle:
      "Quer saber por que as faixas de crédito da Quod são diferentes dos outros birôs de crédito e como elas funcionam? Confira aqui!",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Como negociar dívidas de um cliente inadimplente?",
    subtitle:
      "Confira aqui algumas alternativas de como negociar dívidas de um cliente inadimplente!",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Nós somos o novo, nós somos o cadastro positivo",
    subtitle:
      "Conheça a Quod e como os seus serviços melhoram a análise de crédito nas empresas",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Vender via parceiros vale a pena?",
    subtitle:
      "Entenda como escolher e manter os melhores parceiros de vendas para o seu negócio",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Educação financeira para as crianças?",
    subtitle:
      "Como ensinar a educação financeira infantil para o seu filho? A Quod esclarece as suas dúvidas e mostra por onde começar!",
  },
  {
    image: "/static_assets/images/categories.jpg",
    link: "#",
    title: "Como desenvolver um plano de negócios.",
    subtitle:
      "Quer investir na expansão do seu negócio? Confira aqui como desenvolver um plano de negócios para empresas atuantes no mercado!",
  },
];

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
    <>
      <Navbar />
      <Content>
        <Title />
        <PinnedContent>
          <PinnedPost />
          <SearchBar />
          <Categories categories={CATEGORIES} />
        </PinnedContent>
        <Posts posts={POSTS} />
        <Pagination />
      </Content>
      <FooterWithoutForm />
    </>
  );
}

export default Blog;
