import {colors} from 'ui/theme';

export default {
  hamburguer: function () {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H19.5" stroke={colors.green300} stroke-width="1.5" />
        <path d="M0 8H19.5" stroke={colors.green300} stroke-width="1.5" />
        <path d="M0 15H19.5" stroke={colors.green300} stroke-width="1.5" />
      </svg>
    );
  }
}
