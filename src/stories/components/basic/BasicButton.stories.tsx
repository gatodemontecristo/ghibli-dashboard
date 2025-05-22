import { BasicButton } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";
import { GiJapan } from "react-icons/gi";

const meta: Meta<typeof BasicButton> = {
  title: "Components/BasicButton",
  component: BasicButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof BasicButton>;

export const Default: Story = {
  args: {
    text: "Click me",
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export const WithIcon: Story = {
  args: {
    text: "Go to Japan",
    icon: <GiJapan className="size-5" />,
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export const CustomClass: Story = {
  args: {
    text: "Custom",
    className: "bg-blue-500 hover:bg-blue-700",
  },
};
