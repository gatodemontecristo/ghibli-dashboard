import { DetailSection } from "@/src/components";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof DetailSection> = {
  title: "Components/detail/DetailSection",
  component: DetailSection,
  args: {
    src: "/ghibli-wallpaper/wallpaperbanner.webp",
    className: "md:w-1/2 w-full bg-ghibli-blue",
    children: (
      <>
        <h2 className="text-xl font-bold text-ghibli-white">
          My Neighbor Totoro
        </h2>
        <p className="text-ghibli-white line-clamp-6">
          Two girls move to the country to be near their ailing mother, and
          discover the nearby forest is inhabited by magical creatures called
          Totoros.
        </p>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof DetailSection>;

export const Default: Story = {};
