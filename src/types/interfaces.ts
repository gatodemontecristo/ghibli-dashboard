export interface ItembarProps {
  img: string;
  title: string;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
