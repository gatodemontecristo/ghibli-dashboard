import { SorterFilter } from "@/src/components";
import { Meta, StoryObj } from "@storybook/react";
import { withReduxDecorator } from "../../withReduxDecorator";

const meta: Meta<typeof SorterFilter> = {
  title: "Components/filter/SorterFilter",
  decorators: [withReduxDecorator],
  component: SorterFilter,
};

export default meta;

type Story = StoryObj<typeof SorterFilter>;

export const Default: Story = {};
