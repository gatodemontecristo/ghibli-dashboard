import { ReactElement } from "react";

export interface ItembarProps {
  img: string;
  title: string;
  onClick: () => void;
}
export interface ItemextraProps extends ItembarProps {
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
