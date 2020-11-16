import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { Button, ButtonGroup, OrderedList } from "ui";
import { colors, typography } from "ui/theme";

const Container = styled.section`
  display: grid;
  row-gap: 46px;
  padding: 70px 30px;
  background: ${colors.grayGradient};
`;

const Title = styled.h2`
  font-family: ${typography.inter};
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  text-align: center;
  color: ${colors.gray};
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  color: ${colors.gray300};
`;

const ProductContainer = styled.div`
  display: inline-grid;
`;

const ProductInfoContainer = styled(motion.article)`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shadow};
  margin-bottom: 48px;
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
`;

const ImageContainer = styled.header`
  position: relative;
  left: -2.5%;
  top: -10px;

  img {
    box-shadow: ${colors.shadow};
  }
`;

const ButtonContainer = styled.div`
  position: relative;
`;

const BUTTONS = ["Consulta PF", "Consulta PJ", "Recuperação de dívidas"];

const PRODUCTS_INFO = [
  {
    key: 1,
    imagePath: "/static_assets/images/product_info/query-pj.png",
    imagesDescription: "sistema de consulta pessoa jurídica",
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
    imagesDescription: "sistema de consulta pessoa jurídica",
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
    imagesDescription: "sistema de consulta pessoa jurídica",
    description: [
      "Conheça seu cliente, conferindo todos os dados cadastrais e confirmando a validade do endereço pelo mapa.",
      "Saiba a probabilidade de um cliente pagar um compromisso financeiros nos próximos 6 meses",
      "Saiba se seu cliente possui pendências no serviço de proteção com a análise Olhonocred",
      "Veja se o cliente tem solicitado crédito em outras empresas, com histórico completo dos últimos 12 meses",
      "Acesse a nota de crédito de seu cliente",
    ],
  },
];

function ProductDifferentials() {
  const [activeProductIndex, setActiveProductIndex] = useState<number>(1);

  function setActiveIndex(index: number) {
    setActiveProductIndex(index);
  }

  return (
    <Container>
      <div>
        <Title>Conheça nossos produtos</Title>
        <Subtitle>
          Cansado de informações que não têm valor algum? Conheça os
          diferenciais da consulta QUOD Análise Objetiva, todas as informações
          da CONSULTA em apenas uma tela
        </Subtitle>
      </div>

      <ButtonGroup
        buttons={BUTTONS}
        activeIndex={activeProductIndex}
        setActiveIndex={setActiveIndex}
      />

      <ProductContainer>
        {PRODUCTS_INFO.map(function (
          { key, imagePath, imagesDescription, description },
          index
        ) {
          return (
            <ProductInfoContainer
              key={key}
              animate={{ opacity: activeProductIndex === index ? 1 : 0 }}
            >
              <ImageContainer>
                <img width="105%" src={imagePath} alt={imagesDescription} />
              </ImageContainer>

              <OrderedList items={description} />
            </ProductInfoContainer>
          );
        })}
      </ProductContainer>

      <ButtonContainer>
        <Button
          background="blueGradient"
          cta
          padding="20px 30px"
          onClick={() => {}}
        >
          Conheça mais sobre nossa análise de crédito
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default ProductDifferentials;
