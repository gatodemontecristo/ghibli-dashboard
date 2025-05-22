import { DirectorFilter } from "@/src/components";
import { Meta, StoryObj } from "@storybook/react";
import { withReduxDecorator } from "../../withReduxDecorator";

const meta: Meta<typeof DirectorFilter> = {
  title: "Components/filter/DirectorFilter",
  decorators: [withReduxDecorator],

  component: DirectorFilter,
};

export default meta;

type Story = StoryObj<typeof DirectorFilter>;

export const Default: Story = {};
