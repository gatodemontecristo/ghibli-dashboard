import { Sidebar } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/sidebar/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controla si el sidebar está visible",
    },
    onClose: {
      action: "onClose",
      description: "Función ejecutada al cerrar el sidebar (clic fuera)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
