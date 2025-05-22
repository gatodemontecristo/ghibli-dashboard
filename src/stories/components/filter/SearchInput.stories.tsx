import { SearchInput } from "@/src/components";
import { Meta, StoryObj } from "@storybook/react";
import { withReduxDecorator } from "../../withReduxDecorator";

const meta: Meta<typeof SearchInput> = {
  title: "Components/filter/SearchInput",
  decorators: [withReduxDecorator],

  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};
