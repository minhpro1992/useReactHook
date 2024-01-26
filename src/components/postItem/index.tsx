import { FC } from "react";
import { Comments } from "./Comments";

// export type PostItemPropsType = {
//   id: number;
//   title: string;
//   description: string;
// };
export const PostItem = (props: any) => {
  const { post, onClick } = props;
  return (
    <li key={post.id}>
      {post.title}-{post.description}
      <br />
      <button onClick={onClick(post.id)}>Delete me</button>
      <Comments comments={post.comments} />
      <span>-------------------------------</span>
      <br />
    </li>
  );
};
