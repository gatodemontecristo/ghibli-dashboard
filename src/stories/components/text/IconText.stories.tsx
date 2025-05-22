import { IconText } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconText> = {
  title: "Components/text/IconText",
  component: IconText,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "ghibli-sky",
      values: [{ name: "ghibli-sky", value: "#05afbe" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconText>;

export const WithImageIcon: Story = {
  args: {
    type: "img",
    srcImg: "/ghibli-web/kuro02.svg",
    altImg: "Kuro icon",
    title: "Character",
    subtitle: "Kuro creature",
  },
};

export const WithCalendarIcon: Story = {
  args: {
    srcImg: "year",
    altImg: "",
    type: "icon",
    title: "Realease year",
    subtitle: "1988",
  },
};

export const WithClockIcon: Story = {
  args: {
    srcImg: "time",
    altImg: "",
    type: "icon",
    title: "Running time",
    subtitle: "1h 27min",
  },
};
