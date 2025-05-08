import { ReactElement } from "react";

export interface ItembarProps {
  img: string;
  title: string;
  path: string;
}
export interface ItemextraProps {
  img: string;
  title: string;
  onClick: () => void;
  secondary: string;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface MainCardProps {
  title: string;
  secondary: string;
  intro: string;
  description: string;
  image: ImageProps;
  children?: ReactElement | ReactElement[];
}

export interface UnderlinedtitleProps {
  title: string;
  className?: string;
  color?: string;
  underline?: string;
}
export interface IconTextProps {
  srcImg: string;
  altImg: string;
  type: "icon" | "img";
  title: string;
  subtitle: string;
}
