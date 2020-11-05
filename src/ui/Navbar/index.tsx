import Icon from 'ui/Icon';

export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <img
          src="/static_assets/images/olho-no-credito-logo.svg"
          alt="olho no cédito logo"
        ></img>
      </a>
      <div>
        <button>Entrar</button>
        <button><Icon name="hamburguer" /></button>
      </div>
    </nav>
  );
}
