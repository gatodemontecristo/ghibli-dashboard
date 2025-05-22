import { Underlinedtitle } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Underlinedtitle> = {
  title: "Components/text/Underlinedtitle",
  component: Underlinedtitle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Underlinedtitle>;

export const Default: Story = {
  args: {
    title: "Section Title",
  },
};

export const CustomColorAndSize: Story = {
  args: {
    title: "Custom Styled Title",
    color: "text-ghibli-orange",
    underline: "bg-ghibli-sky",
    textSize: "text-4xl",
    className: "items-center",
  },
};

export const WithCustomClass: Story = {
  args: {
    title: "Centered Title",
    className: "items-center gap-2",
    color: "text-ghibli-blue",
    underline: "bg-ghibli-orange",
  },
};
