import { colors } from "ui/theme";

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
  },
  cross: function () {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.61117 8.00062L1.13074 3.52019C0.635696 3.02515 0.635696 2.22256 1.13074 1.7283L1.72804 1.131C2.22323 0.635802 3.02582 0.635802 3.52008 1.131L8.00036 5.61127L12.4808 1.13007C12.9758 0.635029 13.7784 0.635029 14.2727 1.13007L14.8709 1.72737C15.3659 2.22256 15.3659 3.02515 14.8709 3.51942L10.3897 8.00062L14.87 12.4809C15.3652 12.9761 15.3652 13.7787 14.87 14.2729L14.2727 14.8702C13.7776 15.3653 12.9751 15.3653 12.4808 14.8702L8.00036 10.3898L3.52008 14.8702C3.02489 15.3653 2.2223 15.3653 1.72804 14.8702L1.13074 14.2729C0.635696 13.7777 0.635696 12.9752 1.13074 12.4809L5.61117 8.00062Z"
          fill="white"
        />
      </svg>
    );
  },
};
