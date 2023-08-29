import type { Meta, StoryObj } from "@storybook/react";

import { Typography, TypographyType } from "../components";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: false,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionTitle: Story = {
  args: {
    type: TypographyType.SECTION_TITLE,
    children: "Section Title",
  },
};

export const Headline: Story = {
  args: {
    type: TypographyType.HEADLINE,
    children: "Headline",
  },
};

export const Description: Story = {
  args: {
    type: TypographyType.DESCRIPTION,
    children: "Description",
  },
};
