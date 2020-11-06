import { useState } from "react";

import { Icon, Button } from "ui";

import {
  NavigationContainer,
  ActionsContainer,
  FloatingMenu,
  FloatingMenuList,
  MascoteHolder,
} from "./styles";

const variants = {
  hidden: {
    x: "100%",
    y: -86,
  },
  visible: {
    x: 0,
    y: -86,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <NavigationContainer>
        <a href="#">
          <img
            src="/static_assets/images/olho-no-credito-logo.svg"
            alt="olho no cédito logo"
          ></img>
        </a>
        <ActionsContainer>
          <Button
            uppercase
            background="horizontalBlueGradient"
            padding="0 20px"
          >
            Entrar
          </Button>
          <Button squared onClick={() => setIsOpen(true)}>
            <Icon name="hamburguer" />
          </Button>
        </ActionsContainer>
      </NavigationContainer>

      <FloatingMenu
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
      >
        <NavigationContainer>
          <a href="#">
            <img
              src="/static_assets/images/olho-no-credito-logo.svg"
              alt="olho no cédito logo"
            ></img>
          </a>
          <ActionsContainer>
            <Button
              rounded
              background="green600"
              padding="14px"
              onClick={() => setIsOpen(false)}
            >
              <Icon name="cross" />
            </Button>
          </ActionsContainer>
        </NavigationContainer>

        <FloatingMenuList>
          <li>
            <a>Planos</a>
          </li>
          <li>
            <a>Produtos</a>
          </li>
          <li>
            <a>Dúvidas</a>
          </li>
          <li>
            <a>Teste Grátis</a>
          </li>
          <li>
            <a>Fale Conosco</a>
          </li>
        </FloatingMenuList>

        <MascoteHolder>
          <img
            src="/static_assets/images/mascote.svg"
            alt="mascote olho no crédito"
          />
        </MascoteHolder>
      </FloatingMenu>
    </>
  );
}
