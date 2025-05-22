import { NotFound } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NotFound> = {
  title: "Components/notfound/NotFound",
  component: NotFound,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Título principal del mensaje de error",
    },
    description: {
      control: { type: "text" },
      description: "Descripción secundaria del error",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  },
};

export const CustomMessage: Story = {
  args: {
    title: "Oops! Something went wrong",
    description: "This Ghibli section is under construction.",
  },
};
