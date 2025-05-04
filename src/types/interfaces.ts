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
