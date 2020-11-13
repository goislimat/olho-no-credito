import icons from "ui/Icon/icons";

type DescriptiveIcon = {
  iconName: keyof typeof icons;
  title: string;
  description: string;
};

export default DescriptiveIcon;
