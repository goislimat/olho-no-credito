import PlanCardType from "types/PlanCard";
import { PlanCard } from "ui";

interface Props {
  plans: PlanCardType[];
}

function PlansCarousel({ plans }: Props) {
  return (
    <div>
      {plans.map(function (plan) {
        return <PlanCard plan={plan} />;
      })}
    </div>
  );
}

export default PlansCarousel;
