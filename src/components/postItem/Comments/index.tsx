import { FC } from "react";
import { Comment } from "../../../types";
import { NoData } from "../../Nodata";
import { CommentItem } from "./CommentItem";

type CommentListProps = {
  comments: Comment[];
};
export const Comments: FC<CommentListProps> = (props) => {
  const { comments } = props;
  return (
    <div>
      <p>Comment detail</p>
      {comments ? (
        comments?.map((comment: Comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};
