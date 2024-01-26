export const CommentItem = (props: any) => {
  const { comment } = props;
  return (
    <span>
      {comment.title}-{comment.description}
    </span>
  );
};
