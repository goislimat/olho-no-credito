import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Button, ButtonGroup, OrderedList } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Container = styled.section`
  display: grid;
  row-gap: 46px;
  padding: 70px 30px;
  background: ${colors.grayGradient};

  ${breakpoints.desktop} {
    row-gap: 68px;
  }
`;

const Title = styled.h2`
  font-family: ${typography.inter};
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  text-align: center;
  color: ${colors.gray};
  margin-bottom: 20px;

  ${breakpoints.desktop} {
    max-width: 1024px;
    margin: 0 auto 20px;
    font-size: 35px;
    line-height: 42px;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  color: ${colors.gray300};

  ${breakpoints.desktop} {
    max-width: 664px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 4.5%;
  }
`;

const ProductContainer = styled.div`
  display: inline-grid;

  ${breakpoints.desktop} {
    width: 1024px;
    margin-left: 8%;
  }
`;

const ProductInfoContainer = styled(motion.article)`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shadow};
  margin-bottom: 48px;
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 1 / 1;

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ImageContainer = styled.header`
  position: relative;
  left: -2.5%;
  top: -10px;
  width: 105%;
  min-height: 222px;

  img {
    box-shadow: ${colors.shadow};
  }

  ${breakpoints.desktop} {
    min-width: 624px;
    min-height: 464px;
    margin-right: -18%;
  }
`;

const ButtonContainer = styled.div`
  position: relative;

  ${breakpoints.desktop} {
    display: flex;
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  padding: 20px 30px;

  ${breakpoints.desktop} {
    padding: 16px 80px;
  }
`;

const BUTTONS = ["Consulta PF", "Consulta PJ", "Recuperação de dívidas"];

const PRODUCTS_INFO = [
  {
    key: 1,
    imagePath: "/static_assets/images/product_info/query-pj.png",
    imageDescription: "sistema de consulta pessoa jurídica",
    description: [
      "Veja se o cliente tem solicitado crédito em outras empresas, com histórico completo dos últimos 12 meses",
      "Conheça seu cliente, conferindo todos os dados cadastrais e confirmando a validade do endereço pelo mapa.",
      "Saiba se seu cliente possui pendências no serviço de proteção com a análise Olhonocred",
      "Saiba a probabilidade de um cliente pagar um compromisso financeiros nos próximos 6 meses",
      "Acesse a nota de crédito de seu cliente",
    ],
  },
  {
    key: 2,
    imagePath: "/static_assets/images/product_info/query-pj.png",
    imageDescription: "sistema de consulta pessoa jurídica",
    description: [
      "Acesse a nota de crédito de seu cliente",
      "Saiba a probabilidade de um cliente pagar um compromisso financeiros nos próximos 6 meses",
      "Saiba se seu cliente possui pendências no serviço de proteção com a análise Olhonocred",
      "Veja se o cliente tem solicitado crédito em outras empresas, com histórico completo dos últimos 12 meses",
      "Conheça seu cliente, conferindo todos os dados cadastrais e confirmando a validade do endereço pelo mapa.",
    ],
  },
  {
    key: 3,
    imagePath: "/static_assets/images/product_info/query-pj.png",
    imageDescription: "sistema de consulta pessoa jurídica",
    description: [
      "Conheça seu cliente, conferindo todos os dados cadastrais e confirmando a validade do endereço pelo mapa.",
      "Saiba a probabilidade de um cliente pagar um compromisso financeiros nos próximos 6 meses",
      "Saiba se seu cliente possui pendências no serviço de proteção com a análise Olhonocred",
      "Veja se o cliente tem solicitado crédito em outras empresas, com histórico completo dos últimos 12 meses",
      "Acesse a nota de crédito de seu cliente",
    ],
  },
];

interface Props {
  title: string;
  description: string;
  cta: string;
}

function ProductDifferentials({ title, description, cta }: Props) {
  const [activeProductIndex, setActiveProductIndex] = useState<number>(1);

  function setActiveIndex(index: number) {
    setActiveProductIndex(index);
  }

  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Subtitle>{description} </Subtitle>
      </div>

      <ButtonGroup
        buttons={BUTTONS}
        activeIndex={activeProductIndex}
        setActiveIndex={setActiveIndex}
      />

      <ProductContainer>
        {PRODUCTS_INFO.map(function (
          { key, imagePath, imageDescription, description },
          index
        ) {
          return (
            <ProductInfoContainer
              key={key}
              animate={{ opacity: activeProductIndex === index ? 1 : 0 }}
            >
              <ImageContainer>
                <Image layout="fill" src={imagePath} alt={imageDescription} />
              </ImageContainer>

              <OrderedList items={description} />
            </ProductInfoContainer>
          );
        })}
      </ProductContainer>

      <ButtonContainer>
        <StyledButton background="blueGradient" cta onClick={() => {}}>
          {cta}
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}

export default ProductDifferentials;
