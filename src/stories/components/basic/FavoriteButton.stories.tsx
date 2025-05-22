import { FavoriteButton } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";
import { FaStar } from "react-icons/fa";

const meta: Meta<typeof FavoriteButton> = {
  title: "Components/basic/FavoriteButton",
  component: FavoriteButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    text: "Favorite",
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export const Active: Story = {
  args: {
    text: "Favorited",
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
    text: "Starred",
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
    text: "Styled",
    className: "bg-purple-500 hover:bg-purple-700",
  },
};
