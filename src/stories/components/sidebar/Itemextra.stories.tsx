import { Itemextra } from "@/src/components/sidebar/Itemextra";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Itemextra> = {
  title: "Components/sidebar/Itemextra",
  component: Itemextra,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "ghibli-black",
      values: [{ name: "ghibli-black", value: "#211816" }],
    },
  },
  argTypes: {
    img: {
      control: { type: "text" },
      description: "URL de la imagen a mostrar",
    },
    title: {
      control: { type: "text" },
      description: "Título principal del ítem",
    },
    secondary: {
      control: { type: "text" },
      description: "Texto secundario mostrado debajo del título",
    },
    onClick: { action: "clicked", description: "Evento al hacer clic" },
  },
};

export default meta;
type Story = StoryObj<typeof Itemextra>;

export const Default: Story = {
  args: {
    title: "Read More",
    secondary: "View details about this feature",
    img: "/ghibli-web/icon_kinen.png",
  },
};

export const CustomExample: Story = {
  args: {
    title: "Bonus Content",
    secondary: "Behind the scenes footage",
    img: "/ghibli-web/icon_shop.png",
  },
};
