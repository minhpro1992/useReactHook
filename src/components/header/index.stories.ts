import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Header } from ".";
type HeaderType = typeof Header;
type HeaderStory = StoryObj<HeaderType>;

const meta: Meta<ComponentProps<HeaderType>> = {
  component: Header,
};

export default meta;
export const Default: HeaderStory = {};
