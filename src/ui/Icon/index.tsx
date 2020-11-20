import icons from "./icons";
import paymentOptionsIcons from "./paymentOptionsIcons";

interface Props {
  name: keyof typeof icons | keyof typeof paymentOptionsIcons;
}

function Icon({ name }: Props): JSX.Element {
  const allIcons = { ...icons, ...paymentOptionsIcons };

  return allIcons[name]();
}

export default Icon;
