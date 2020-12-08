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
  "Quod Score",
  "Pontualidade de pagamento",
  "Relacionamento com o mercado",
  "Participação em empresas",
  "Inadimplências comunicadas",
  "Ações judiciais",
  "Participação em recuperação e falências",
];

interface Props {
  currentStep: number;
  stepTitle: string;
  showQueryResultInfo?: true;
  children: ReactNode;
}

function PageTemplate({
  currentStep,
  stepTitle,
  showQueryResultInfo,
  children,
}: Props) {
  const isFirstStep = currentStep === 1;

  return (
    <>
      <LogoContainer>
        <OlhoNoCreditoLogo />
      </LogoContainer>

      <Container>
        {isFirstStep && <Title>Teste Grátis</Title>}

        <QueryContainer isFirstStep={isFirstStep}>
          <QueryCard isFirstStep={isFirstStep}>
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
          <FormTitle>{stepTitle}</FormTitle>

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
