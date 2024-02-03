import { FC } from "react";
import { PostType } from "../../types";
import { Comments } from "./Comments";

export type PostTypeProps = {
  post: PostType;
  onClick: (postId: number) => () => void;
};
export const PostItem: FC<PostTypeProps> = (props) => {
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
