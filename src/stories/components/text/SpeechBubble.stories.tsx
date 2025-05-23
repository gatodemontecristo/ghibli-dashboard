import { SpeechBubble } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SpeechBubble> = {
  title: "Components/text/SpeechBubble",
  component: SpeechBubble,
  tags: ["autodocs"],
  args: {
    text: "Give me a star if you like my work!",
    href: "https://github.com/gatodemontecristo/ghibli-dashboard",
    atext: "Check the repo",
    position: "bottom",
  },
  parameters: {
    backgrounds: {
      default: "ghibli-blue",
      values: [{ name: "ghibli-blue", value: "#0d9ceb" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpeechBubble>;

export const Bottom: Story = {
  args: {
    position: "bottom",
  },
};

export const Top: Story = {
  args: {
    position: "top",
  },
};

export const Left: Story = {
  args: {
    position: "left",
  },
};

export const Right: Story = {
  args: {
    position: "right",
  },
};
