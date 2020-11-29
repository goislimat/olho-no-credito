import { ReactNode } from "react";
import { FooterWithoutForm } from "sharedSections";
import { Icon, OlhoNoCreditoLogo, QuodLogo, StepCounter } from "ui";

import {
  LogoContainer,
  Container,
  Title,
  QueryContainer,
  QueryCard,
  CardTitle,
  CardDescription,
  QueryResultList,
  QueryResultListItem,
  FormStepContainer,
  FormContainer,
  FormTitle,
  StepContainer,
  QuodContainer,
} from "./styles";

const QUERY_RESULT_INFO = [
  "Dados Cadastrais",
  "Quopd Score",
  "Pontualidade de pagamento",
  "Relacionamento com o mercado",
  "Participação em empresas",
  "Inadimplências comunicadas",
  "Ações judiciais",
  "Participação em recuperação e falências",
];

interface Props {
  currentStep: number;
  showQueryResultInfo?: true;
  children: ReactNode;
}

function PageTemplate({ currentStep, showQueryResultInfo, children }: Props) {
  return (
    <>
      <LogoContainer>
        <OlhoNoCreditoLogo />
      </LogoContainer>

      <Container>
        <Title>Teste Grátis</Title>

        <QueryContainer>
          <QueryCard>
            <CardTitle>
              <span>5</span> Consultas
            </CardTitle>
            <CardDescription>Gratuitas</CardDescription>
          </QueryCard>

          <QueryResultList isVisible={showQueryResultInfo}>
            {QUERY_RESULT_INFO.map(function (result) {
              return (
                <QueryResultListItem key={result}>
                  <span>
                    <Icon name="check" />
                  </span>
                  {result}
                </QueryResultListItem>
              );
            })}
          </QueryResultList>
        </QueryContainer>

        <FormStepContainer>
          <FormTitle>Insira o CNPJ da sua empresa</FormTitle>

          <StepContainer>
            <StepCounter numberOfSteps={4} currentActiveStep={currentStep} />
          </StepContainer>
        </FormStepContainer>

        <FormContainer>{children}</FormContainer>

        <QuodContainer>
          <QuodLogo />
        </QuodContainer>
      </Container>
      <FooterWithoutForm />
    </>
  );
}

export default PageTemplate;
