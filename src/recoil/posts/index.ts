import { atom } from "recoil";
import { PostListProps } from "../../types";

const initialPosts: PostListProps = [
  {
    title: "post 1",
    description: "des 1",
    id: 1,
    comments: [
      {
        id: 1,
        title: "comment 1",
        description: "des comment 1",
      },
      {
        id: 2,
        title: "comment 2",
        description: "des comment 2",
      },
    ],
  },
  { title: "post 2", description: "des 2", id: 2, comments: [] },
  { title: "post 3", description: "des 3", id: 3, comments: [] },
];

export const postListAtom = atom({
  key: "postListAtom",
  default: initialPosts,
});
