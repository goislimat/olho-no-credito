import IconListingSection from "components/IconListingSection";
import DescriptiveIconType from "types/DescriptiveIcon";

const ITEMS: DescriptiveIconType[] = [
  {
    iconName: "target",
    title: "Escolha o plano",
    description: "Escolha a melhor opção para você",
  },
  {
    iconName: "stickPeople",
    title: "Preencha seus dados",
    description: "Nós prezamos pelo sigilo dos seus dados",
  },
  {
    iconName: "document",
    title: "Forma de pagamento",
    description: "Escolha entre boleto ou cartão de crédito",
  },
  {
    iconName: "like",
    title: "Pronto",
    description: "Bem-vindo a OlhonoCred",
  },
];

function HowEasyIsToQuery() {
  return (
    <IconListingSection
      sectionTitle="Veja como é fácil realizar a consulta"
      items={ITEMS}
    />
  );
}

export default HowEasyIsToQuery;
