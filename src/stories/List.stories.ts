import type { Meta, StoryObj } from "@storybook/react";

import { List } from "../components";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalList: Story = {
  args: {
    values: ["Drone Photography", "Interiors", "Exteriors / Architectural"],
  },
};
