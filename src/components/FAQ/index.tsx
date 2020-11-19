import styled from "styled-components";

import { Icon } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const SELECTED_FAQ = [
  {
    question:
      "Se eu não gostar do produto da OlhonoCred como eu faço para cancelar?",
    ansewr: "",
  },
  {
    question: "O que está incluso na análise de crédito?",
    ansewr: "",
  },
  {
    question: "Para quem se destina este produto?",
    ansewr: "",
  },
];

const Title = styled.h2`
  font-family: ${typography.inter};
  font-size: 20px;
  line-height: 31px;
  font-weight: 600;
  padding: 0 20px;
  text-align: center;
  color: ${colors.gray};
  margin-bottom: 48px;
`;

const QuestionsContainer = styled.div`
  padding: 0 20px;

  ${breakpoints.desktop} {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Question = styled.div`
  border-radius: 5px;
  background: ${colors.white};
  box-shadow: ${colors.shadow};
  margin-bottom: 20px;

  :last-child() {
    margin-bottom: 0;
  }
`;

const QuestionHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 8px 16px 8px 0;
  min-height: 40px;
`;

const QuestionTitle = styled.h3`
  font-family: ${typography.inter};
  font-size: 10px;
  line-height: 13px;
  font-weight: 600;
  border-left: 3px solid #d1d9e8;
  padding: 0 16px;
  min-height: 25px;
  display: flex;
  align-items: center;
`;

function FAQ() {
  return (
    <section>
      <Title>Dúvidas frequentes</Title>

      <QuestionsContainer>
        {SELECTED_FAQ.map(function ({ question }) {
          return (
            <Question key={question}>
              <QuestionHeader>
                <QuestionTitle>{question}</QuestionTitle>
                <Icon name="plus" />
              </QuestionHeader>
            </Question>
          );
        })}
      </QuestionsContainer>
    </section>
  );
}

export default FAQ;
