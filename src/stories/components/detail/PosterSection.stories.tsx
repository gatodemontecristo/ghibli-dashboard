import { PosterSection } from "@/src/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PosterSection> = {
  title: "Components/detail/PosterSection",
  component: PosterSection,
  args: {
    srcImage:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    altImage: "My Neighbor Totoro Poster",
    className: "w-64 h-96 rounded-lg shadow-lg",
  },
};

export default meta;

type Story = StoryObj<typeof PosterSection>;

export const Default: Story = {};
