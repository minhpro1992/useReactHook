import { NoData } from "../../Nodata";
import { CommentItem } from "./CommentItem";

export const Comments = (props: any) => {
  const { comments } = props;
  return (
    <div>
      <p>Comment detail</p>
      {comments ? (
        comments?.map((comment: any) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};
