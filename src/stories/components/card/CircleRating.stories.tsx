import { CircleRating } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CircleRating> = {
  title: "Components/CircleRating",
  component: CircleRating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    score: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    size: {
      control: { type: "number" },
    },
    strokeWidth: {
      control: { type: "number" },
    },
    fontsize: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircleRating>;

export const Default: Story = {
  args: {
    score: 75,
  },
  parameters: {
    backgrounds: {
      default: "ghibli-sky",
      values: [{ name: "ghibli-sky", value: "#05afbe" }],
    },
  },
};

export const CustomSize: Story = {
  args: {
    score: 85,
    size: 150,
    strokeWidth: 8,
  },
  parameters: {
    backgrounds: {
      default: "ghibli-sky",
      values: [{ name: "ghibli-sky", value: "#05afbe" }],
    },
  },
};

export const SmallFont: Story = {
  args: {
    score: 90,
    fontsize: "text-sm",
  },
  parameters: {
    backgrounds: {
      default: "ghibli-sky",
      values: [{ name: "ghibli-sky", value: "#05afbe" }],
    },
  },
};

export const LargeFontAndStroke: Story = {
  args: {
    score: 65,
    size: 120,
    strokeWidth: 14,
    fontsize: "text-2xl",
  },
  parameters: {
    backgrounds: {
      default: "ghibli-sky",
      values: [{ name: "ghibli-sky", value: "#05afbe" }],
    },
  },
};
