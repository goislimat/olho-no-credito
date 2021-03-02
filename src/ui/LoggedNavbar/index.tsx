import Image from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Icon, SiteLogo } from "ui";
import { breakpoints, typography } from "ui/theme";

const Navbar = styled.nav`
  height: 86px;
  margin: 0 -20px;

  ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 3px solid #edf3fc;
    background: #fff;
    height: 104px;
    padding: 0 100px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #edf3fc;
  padding: 0 20px;
  height: 100%;

  ${breakpoints.desktop} {
    grid-column: 1 / 2;

    border: 0;
  }
`;

const ControlsContainer = styled.div`
  ${breakpoints.desktop} {
    display: none;
  }
`;

const ActionButton = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    background: transparent;
    outline: 0;
    border: 0;
    height: 42px;
    width: 42px;
    display: grid;
    place-content: center center;
    border-radius: 50%;

    transition: background 250ms;

    ${isOpen &&
    css`
      background: #1abe33;
    `};
  `}
`;

const NavContainer = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    background: #f2f2f2;
    height: calc(100vh - 86px);
    width: 100vw;
    position: absolute;
    z-index: 10;
    overflow-y: scroll;

    transform: translate(-100vw, 0);
    transition: transform 250ms;

    ${isOpen &&
    css`
      transform: translate(0, 0);
    `}
  `}

  ${breakpoints.desktop} {
    grid-column: 2 / 3;

    display: grid;
    align-items: center;
    transform: translate(0, 0);
    position: relative;
    z-index: auto;
    overflow-y: auto;
    width: 100%;
    height: auto;
    background: transparent;
    padding: 0 40px 0 130px;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 0 20px;

  ${breakpoints.desktop} {
    padding: 0;
    display: grid;
    grid-auto-flow: column;
  }
`;

const NavListItem = styled.li<{ mobileOnly?: boolean }>`
  padding: 20px 0;
  border-bottom: 2px solid rgba(236, 236, 236, 1);

  a {
    font-family: ${typography.roboto};
    font-size: 18px;
    line-height: 25px;
    color: #777;
    text-decoration: none;
  }

  ${breakpoints.desktop} {
    ${({ mobileOnly }) => css`
      border-bottom: 0;

      ${mobileOnly &&
      css`
        display: none;
      `}

      a {
        font-family: ${typography.roboto};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
      }
    `}
  }
`;

const MascotContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 32px 0 120px;

  ${breakpoints.desktop} {
    display: none;
  }
`;

const UserActionsContainer = styled.ul`
  display: none;

  ${breakpoints.desktop} {
    grid-column: 3 / 4;

    list-style-type: none;
    display: flex;
    align-items: center;
    position: relative;
  }
`;

const Dropdown = styled.ul<{ isVisible?: boolean }>`
  ${({ isVisible }) => css`
    list-style-type: none;
    display: none;
    position: absolute;
    background: #fff;
    right: 0;
    margin-top: 30px;
    padding: 12px 24px;
    width: 300px;
    border-radius: 10px 0 10px 10px;
    z-index: 10;
    box-shadow: 5px 3px 25px rgb(0 0 0 / 15%);

    ${isVisible &&
    css`
      display: block;
    `};
  `}
`;

const InvisibleButton = styled.button`
  background: transparent;
  border: none;
  outline: 0;
`;

function LoggedNavbar() {
  const [isMenuOpen, setMenuState] = useState<boolean>(false);
  const [isUserOptionsOpen, setUserOptionsState] = useState<boolean>(false);

  function toggleMenu() {
    setMenuState((state) => !state);
  }

  function toggleUserOptionsMenu() {
    setUserOptionsState((state) => !state);
  }

  return (
    <Navbar>
      <LogoContainer>
        <div>
          <SiteLogo />
        </div>
        <ControlsContainer>
          <ActionButton isOpen={isMenuOpen} onClick={toggleMenu}>
            <Icon name={isMenuOpen ? "cross" : "hamburguer"} />
          </ActionButton>
        </ControlsContainer>
      </LogoContainer>
      <NavContainer isOpen={isMenuOpen}>
        <NavList>
          <NavListItem>
            <a href="#">Consultas</a>
          </NavListItem>
          <NavListItem>
            <a href="#">Minhas consultas</a>
          </NavListItem>
          <NavListItem>
            <a href="#">Minhas faturas</a>
          </NavListItem>
          <NavListItem>
            <a href="#">Histórico de consultas</a>
          </NavListItem>
          <NavListItem>
            <a href="#">Adm de usuários</a>
          </NavListItem>
          <NavListItem>
            <a href="#">LGPD</a>
          </NavListItem>
          <NavListItem mobileOnly>
            <a href="#">Dados pessoais</a>
          </NavListItem>
          <NavListItem mobileOnly>
            <a href="#">Sair</a>
          </NavListItem>
        </NavList>
        <MascotContainer>
          <Image
            src="/static_assets/images/mascote.svg"
            alt="mascote olho no cred"
            width="126"
            height="126"
          />
        </MascotContainer>
      </NavContainer>
      <UserActionsContainer>
        <li>
          <InvisibleButton onClick={toggleUserOptionsMenu}>
            <Icon name="loggedUser" />
          </InvisibleButton>
          <Dropdown isVisible={isUserOptionsOpen}>
            <NavListItem>
              <a href="#">Dados pessoais</a>
            </NavListItem>
            <NavListItem>
              <a href="#">SAIR</a>
            </NavListItem>
          </Dropdown>
        </li>
      </UserActionsContainer>
    </Navbar>
  );
}

export default LoggedNavbar;
