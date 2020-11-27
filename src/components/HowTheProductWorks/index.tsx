import Image from "next/image";
import styled from "styled-components";
import { breakpoints, colors, typography } from "ui/theme";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 28px;

  ${breakpoints.desktop} {
    max-width: 1024px;
    margin: 0 auto;
    padding: 130px 0;
  }
`;

const Header = styled.header`
  display: grid;
  column-gap: 32px;
  margin-bottom: 180px;

  p {
    font-size: 18px;
    line-height: 25px;
    text-align: justify;
    color: ${colors.gray};
  }

  ${breakpoints.desktop} {
    max-width: 796px;
    margin: 0 auto 200px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  row-gap: 118px;

  ${breakpoints.desktop} {
    row-gap: 200px;
  }
`;

const Card = styled.div`
  background: white;
  box-shadow: ${colors.shadow};
  border-radius: 12px;
  padding: 84px 32px 34px;
  display: grid;
  justify-content: center;
  position: relative;

  ${breakpoints.desktop} {
    padding: 48px 38px;
    max-width: 80%;

    &.card-to-right {
      justify-self: end;
    }

    &.card-to-left {
      justify-self: start;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -100px;
  min-width: 100%;
  min-height: 200px;
  text-align: center;

  ${breakpoints.desktop} {
    top: -150px;

    img {
      height: 530px;
      width: 530px;
    }

    &.image-to-right {
      text-align: right;
      right: -300px;
    }

    &.image-to-left {
      text-align: left;
      left: -300px;
    }
  }
`;

const CardContent = styled.div`
  display: grid;
  row-gap: 24px;

  ${breakpoints.desktop} {
    max-width: 80%;

    &.text-to-right {
      justify-self: end;
    }

    &.text-to-left {
      justify-self: start;
    }
  }
`;

const CardTitle = styled.h3`
  font-family: ${typography.roboto};
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${colors.green};
  text-align: center;

  ${breakpoints.desktop} {
    text-align: left;
    font-size: 21px;
    line-height: 26px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray};
  text-align: justify;

  ${breakpoints.desktop} {
    text-align: left;
    font-size: 20px;
    line-height: 25px;
  }
`;

const PRODUCT_DIFFERENTIALS = [
  {
    image: "/static_assets/images/product_info/monitor-with-charts.svg",
    alt: "monitor com gráficos",
    title: "A gente interpreta os dados pra simplificar sua análise",
    description:
      "Simplifique. A Olhonocred traz todas as informações que você precisa saber se vale a pena ou não conceder crédito para o seu cliente (Pessoa Física).",
  },
  {
    image: "/static_assets/images/product_info/laptop-with-coin.svg",
    alt: "notebook com moeda",
    title: "Quer saber se o seu cliente vai te pagar nos próximos 6 meses?",
    description:
      "O score resume todo o poder do cadastro positivo para a sua empresa, transformando-o em uma nota de crédito que mostra se a probabilidade de pagamento e alta, média ou baixa.",
  },
  {
    image: "/static_assets/images/product_info/paper-with-charts.svg",
    alt: "documentos com gráficos",
    title: "A gente interpreta os dados pra sinflificar sua análise",
    description:
      "A Olhonocred torna tudo mais fácil para você. Para isso, reúne indicadores que mostram a saúde financeira e a pontualidade do pagador, dando mais segurança na hora de conceder crédito.",
  },
  {
    image: "/static_assets/images/product_info/starred-customer.svg",
    alt: "cliente feliz",
    title: "Descubra quantas vezes seu cliente foi consultado.",
    description:
      "Venda com mais tranquilidade e segurança ao descobrir se o seu cliente também tem solicitado crédito em outras empresas.",
  },
  {
    image: "/static_assets/images/product_info/smartphone-with-charts.svg",
    alt: "smartphone com gráficos",
    title: "O poder da tecnologia, em uma plataforma simples de usar",
    description:
      "Com tecnologia de ponta aliada a inteligência de dados, é possível entregar as melhores soluções para sua empresa, ajudando a otimizar as vendas. Tudo de forma prática e intuitiva",
  },
  {
    image: "/static_assets/images/product_info/wallet.svg",
    alt: "carteira",
    title: "O melhor preço do mercado",
    description:
      "Tudo que você precisa, sem o preço alto. Já nascemos digitais, simples e eficientes, oferencendo o melhor produto com o menos custo.",
  },
  {
    image: "/static_assets/images/product_info/hand-with-money.svg",
    alt: "mão entregando dinheiro",
    title: "Sem pegadinhas, nem variações de preços.",
    description:
      "Na Olhonocred você tem sempre uma visão clara do seu consumo. Tudo transparente e sem surpresas desagradáveis na hora de realizar o pagamento.",
  },
];

function HowTheProductWorks() {
  return (
    <Container>
      <article>
        <Header>
          <Image
            src="/static_assets/images/product_info/speedometer.svg"
            alt="medidor de velocidade"
            height="210"
            width="210"
          />
          <p>
            Venda mais, com mais tranquilidade e sem custos! Com a análise de
            crédito online da Olhonocred, você confere todos os dados do seu
            cliente em uma única página e sabe a probabilidade dele te pagar nos
            próximos 6 meses Aproveite todo o poder da nossa tecnologia em uma
            plataforma simples de usar, com o melhor preço do mercado e sem
            pegadinha. Experimente agora!
          </p>
        </Header>

        <CardsContainer>
          {PRODUCT_DIFFERENTIALS.map(function (
            { image, alt, title, description },
            index
          ) {
            return (
              <Card
                key={image}
                className={index % 2 ? "card-to-right" : "card-to-left"}
              >
                <ImageContainer
                  className={index % 2 ? "image-to-left" : "image-to-right"}
                >
                  <Image src={image} alt={alt} height="200" width="200" />
                </ImageContainer>

                <CardContent
                  className={index % 2 ? "text-to-right" : "text-to-left"}
                >
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </CardsContainer>
      </article>
    </Container>
  );
}

export default HowTheProductWorks;
