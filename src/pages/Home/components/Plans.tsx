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

function Plans() {
  return (
    <PlansCarousel
      sectionTitle="Conheça mais sobre nossos planos mensais"
      plans={PLANS}
    />
  );
}

export default Plans;
