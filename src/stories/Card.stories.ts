import type { Meta, StoryObj } from "@storybook/react";
import Furniture from "./assets/furniture.png";

import { Card } from "../components";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'grey',
      values: [
        { name: 'grey', value: '#F5F5F8' }
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalCard: Story = {
  args: {
    headline: "Virtual Staging",
    content:
      "Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.",
    image: {
      src: Furniture,
      width: 183.5,
      height: 336,
      alt: "Furniture",
    },
  },
};
