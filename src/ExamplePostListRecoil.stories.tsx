import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import PostList from "./ExamplePostListRecoil";
import { RecoilRoot, type MutableSnapshot } from "recoil";
import { initialPosts, postListAtom } from "./recoil/posts";
type ExamplePostListRecoilType = typeof PostList;
type ExamplePostListRecoilStory = StoryObj<ExamplePostListRecoilType>;

const meta: Meta<ComponentProps<ExamplePostListRecoilType>> = {
  component: PostList,
};

export default meta;

const initializeValueState = ({ set }: MutableSnapshot) => {
  set(postListAtom, initialPosts);
};

export const ExamplePostListRecoil: ExamplePostListRecoilStory = {
  args: {},
  decorators: [
    (Story) => (
      <RecoilRoot initializeState={initializeValueState}>
        <Story />
      </RecoilRoot>
    ),
  ],
};
