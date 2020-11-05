import icons from "./icons";

interface Props {
  name: keyof typeof icons;
}

export default function Icon({ name }: Props) {
  return icons[name]();
}
