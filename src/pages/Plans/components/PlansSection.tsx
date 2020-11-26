import { PlansCarousel } from "components";
import PlanCardType from "types/PlanCard";

const PLANS: PlanCardType[] = [
  {
    numberOfQueries: 10,
    valuePerQueryCents: 490,
    monthlyPaymentCents: 4990,
  },
  {
    numberOfQueries: 30,
    valuePerQueryCents: 333,
    monthlyPaymentCents: 9990,
    featured: true,
  },
  {
    numberOfQueries: 80,
    valuePerQueryCents: 187,
    monthlyPaymentCents: 14990,
  },
];

function PlansSection() {
  return (
    <PlansCarousel
      sectionTitle="Conheça mais sobre nossos planos mensais"
      subtitle="Ao contratar um de nossas assinaturas mensais você recebe descontos em todas as consultas, e não precisa se preocupar em realizar comprar todos os meses. O saldo é creditado na sua conta e não possui prazo para expirar!
Você pode realizar o cancelamento do plano a qualquer momento!"
      plans={PLANS}
    />
  );
}

export default PlansSection;
