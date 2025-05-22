import { Itembar } from "@/src/components/sidebar/Itembar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Itembar> = {
  title: "Components/sidebar/Itembar",
  component: Itembar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "ghibli-black",
      values: [{ name: "ghibli-black", value: "#211816" }],
    },
  },
  argTypes: {
    path: {
      control: { type: "text" },
      description: "Ruta del enlace (href)",
    },
    title: {
      control: { type: "text" },
      description: "Texto que se mostrará al lado de la imagen",
    },
    img: {
      control: { type: "text" },
      description: "URL de la imagen",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Itembar>;

export const Default: Story = {
  args: {
    title: "Characters",
    img: "/ghibli-web/icon_sit.png", // Puedes reemplazarlo con una imagen real de tu app
    path: "/characters",
  },
};

export const AnotherExample: Story = {
  args: {
    title: "Locations",
    img: "/ghibli-web/icon_food.png",
    path: "/locations",
  },
};
