import { useState } from "react";

import { Icon, Button } from "ui";

import {
  NavigationContainer,
  NavLinks,
  NavActions,
  DesktopMenu,
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
        <NavLinks>
          <a href="#">
            <img
              src="/static_assets/images/olho-no-credito-logo.svg"
              alt="olho no cédito logo"
            ></img>
            <h1>Olho no crédito</h1>
          </a>

          <DesktopMenu>
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
              <a>Fale Conosco</a>
            </li>
            <li>
              <a>LGPD</a>
            </li>
          </DesktopMenu>
        </NavLinks>

        <NavActions>
          <ActionsContainer>
            <Button
              uppercase
              background="greenGradient"
              padding="0 20px"
              onClick={() => console.log("Do login")}
              onlyDesktop
            >
              Teste Grátis
            </Button>
            <Button
              uppercase
              background="blueGradient"
              padding="0 20px"
              onClick={() => console.log("Do login")}
            >
              Entrar
            </Button>
            <Button squared onClick={() => setIsOpen(true)} onlyMobile>
              <Icon name="hamburguer" />
            </Button>
          </ActionsContainer>
        </NavActions>
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
