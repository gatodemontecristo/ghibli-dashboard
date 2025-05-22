import { MainCard } from "@/src/components";
import {
  MainCardDescription,
  MainCardIntro,
  MainCardLogo,
  MainCardSecondary,
  MainCardTile,
} from "@/src/components/card/MainCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainCard> = {
  title: "Components/MainCard",
  component: MainCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "ghibli-sky",
      values: [{ name: "ghibli-sky", value: "#05afbe" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainCard>;

export const Default: Story = {
  args: {
    title: "My Neighbor Totoro",
    secondary: "となりのトトロ",
    intro: "A magical story by Studio Ghibli",
    description:
      "Join Satsuki and Mei as they encounter Totoro in a lush countryside adventure.",
    image: {
      src: "/ghibli-help/totoro.png",
      alt: "Totoro Image",
    },
    children: <div className="text-white mt-2">Extra content slot</div>,
  },
};

// Optional: You can also export stories for individual components
export const Logo = () => (
  <MainCardLogo
    image={{ src: "/ghibli-help/totoro.png", alt: "Totoro Image" }}
  />
);

export const Title = () => <MainCardTile title="My Neighbor Totoro" />;
export const Secondary = () => <MainCardSecondary secondary="となりのトトロ" />;
export const Intro = () => (
  <MainCardIntro intro="A magical story by Studio Ghibli" />
);
export const Description = () => (
  <MainCardDescription description="Join Satsuki and Mei as they encounter Totoro in a lush countryside adventure." />
);
