import { ThreeDescriptiveCards } from "components";

const PRODUCT_INFO = [
  {
    photoURL: "/static_assets/images/product_info/smartphone.png",
    photoDescription: "homem mexendo em um smartphone",
    title: "Simplifique",
    description:
      "Todas as informações que você precisa saber em uma só página. Dados que vão desde solicitação de crédito em outras empresas a pontuação de pagamento.",
  },
  {
    photoURL: "/static_assets/images/product_info/couple-closing-a-deal.png",
    photoDescription: "casal fechando negócio",
    title: "Poder de compra",
    description:
      "Quer vender com mais segurança? Com a Olhonocred você fica sabendo qual a probabilidade de pagamento entre alta, média ou baixa do seu cliente.",
  },
  {
    photoURL: "/static_assets/images/product_info/saving-money.png",
    photoDescription: "colocando dinheiro no cofrinho",
    title: "Saúde financeira",
    description:
      "Além de saber a pontualidade do pagador a Olhonocred simplifica a análise da saúde financeira do comprador e te deixa tranquilo na hora de conceder crédito.",
  },
];

function ProductDescription() {
  return (
    <ThreeDescriptiveCards
      sectionTitle="Análise de crédito online perfeita para sua empresa"
      items={PRODUCT_INFO}
    />
  );
}

export default ProductDescription;
