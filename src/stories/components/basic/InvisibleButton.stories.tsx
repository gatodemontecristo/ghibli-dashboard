import { InvisibleButton } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";
import { FaStar } from "react-icons/fa";

const meta: Meta<typeof InvisibleButton> = {
  title: "Components/InvisibleButton",
  component: InvisibleButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof InvisibleButton>;

export const Default: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <FaStar className="size-5" />,
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "text-blue-500 hover:text-green-500",
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};
