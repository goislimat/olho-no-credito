import Image from "next/image";

interface Props {
  width?: string | number;
  height?: string | number;
}

function OlhoNoCreditoLogo({ width = "107", height = "60" }: Props) {
  return (
    <Image
      src="/static_assets/images/olho-no-credito-logo.svg"
      alt="olho no crédito logo"
      width={width}
      height={height}
    />
  );
}

export default OlhoNoCreditoLogo;
