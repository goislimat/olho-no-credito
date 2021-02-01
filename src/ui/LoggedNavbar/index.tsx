import { useState } from "react";
import styled, { css } from "styled-components";
import { Icon, SiteLogo } from "ui";
import { typography } from "ui/theme";

const Navbar = styled.nav`
  height: 86px;
  margin: 0 -20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #edf3fc;
  padding: 0 20px;
  height: 100%;
`;

const ControlsContainer = styled.div``;

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

    transform: translate(100vw, 0);
    transition: transform 250ms;

    ${isOpen &&
    css`
      transform: translate(0, 0);
    `}
  `}
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 0 20px;
`;

const NavListItem = styled.li`
  padding: 20px 0;
  border-bottom: 2px solid rgba(236, 236, 236, 1);

  a {
    font-family: ${typography.roboto};
    font-size: 18px;
    line-height: 25px;
    color: #777;
    text-decoration: none;
  }
`;

function LoggedNavbar() {
  const [isMenuOpen, setMenuState] = useState<boolean>(false);

  const toggleMenu = () => setMenuState((state) => !state);
  console.log(isMenuOpen);

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
          <NavListItem>
            <a href="#">Dados pessoais</a>
          </NavListItem>
          <NavListItem>
            <a href="#">Sair</a>
          </NavListItem>
        </NavList>
        <div>mascote</div>
      </NavContainer>
      <ul>
        <li>
          <span>person</span>
          <ul>
            <li>Dados pessoais</li>
            <li>Sair</li>
          </ul>
        </li>
      </ul>
    </Navbar>
  );
}

export default LoggedNavbar;
