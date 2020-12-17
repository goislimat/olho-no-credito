import { useState } from "react";
import Link from "next/link";

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
  MenuLinks,
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
          <Link href="/">
            <a>
              <img
                src="/static_assets/images/olho-no-credito-logo.svg"
                alt="olho no crédito logo"
              ></img>
            </a>
          </Link>

          <DesktopMenu>
            <li>
              <Link href="/planos">
                <MenuLinks>Planos</MenuLinks>
              </Link>
            </li>
            <li>
              <Link href="/produtos">
                <MenuLinks>Produtos</MenuLinks>
              </Link>
            </li>
            <li>
              <Link href="/duvidas">
                <MenuLinks>Dúvidas</MenuLinks>
              </Link>
            </li>
            <li>
              <Link href="/fale-conosco">
                <MenuLinks>Fale Conosco</MenuLinks>
              </Link>
            </li>
            <li>
              <Link href="/lgpd">
                <MenuLinks>LGPD</MenuLinks>
              </Link>
            </li>
          </DesktopMenu>
        </NavLinks>

        <NavActions>
          <ActionsContainer>
            <Button
              link
              href="/teste-gratis/passo-1"
              uppercase
              background="greenGradient"
              padding="16px 12px"
              min-width="157px"
              font-size="15px"
              line-height="17px"
              onClick={() => {}}
              onlyDesktop
            >
              Teste Grátis
            </Button>

            <Button
              link
              href="/entrar"
              uppercase
              background="blueGradient"
              padding="16px 12px"
              min-width="157px"
              font-size="15px"
              line-height="17px"
            >
              Entrar
            </Button>
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
              onlyMobile
            >
              <Icon name="hamburguer" />
            </Button>
          </ActionsContainer>
        </NavActions>
      </NavigationContainer>
      {/* 
      <FloatingMenu
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
      >
        <NavigationContainer>
          <a>
            <img
              src="/static_assets/images/olho-no-credito-logo.svg"
              alt="olho no crédito logo"
            ></img>
          </a>

          <ActionsContainer>
            <Button
              rounded
              background="green600"
              padding="14px"
              onClick={() => {
                console.log("setting is open to false");
                setIsOpen(false);
              }}
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
      </FloatingMenu> */}
    </>
  );
}
