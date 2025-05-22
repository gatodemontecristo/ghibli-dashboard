import { TitlePage } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TitlePage> = {
  title: "Components/text/TitlePage",
  component: TitlePage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TitlePage>;

export const Default: Story = {
  args: {
    colorText: "Ghibli",
    normalText: "Library",
    image: "/ghibli-help/totoro.png",
    alt: "Totoro logo",
  },
};

export const CustomClasses: Story = {
  args: {
    colorText: "Studio",
    normalText: "Ghibli Collection",
    className: "text-xl md:text-2xl font-bold",
    classImg: "w-16 h-16",
    image: "/ghibli-help/totoro.png",
    alt: "Totoro icon",
  },
};
