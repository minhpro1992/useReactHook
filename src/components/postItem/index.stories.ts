import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { PostItem } from ".";

type PostItemType = typeof PostItem;
type PostItemStory = StoryObj<PostItemType>;

const PostItemProps = {
  post: {
    id: 1,
    title: "test 1",
    description: "description 1",
    comments: [],
  },
  onClick: (postId: number) => () => {
    console.log("trigger onClick event", postId);
  },
};
const meta: Meta<ComponentProps<PostItemType>> = {
  component: PostItem,
  args: PostItemProps,
};

export default meta;
export const PostItemHasNoCommentsStory: PostItemStory = {};
export const PostItemHasOneCommentsStory: PostItemStory = {
  args: {
    ...PostItemProps.onClick,
    post: {
      id: 1,
      title: "test 1",
      description: "description 1",
      comments: [
        {
          id: 1,
          title: "comment 1",
          description: "Description 1",
        },
      ],
    },
  },
};
