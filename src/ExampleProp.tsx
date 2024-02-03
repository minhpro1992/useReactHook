import { useRecoilState } from "recoil";
import { NoData } from "./components/Nodata";
import { PostItem } from "./components/postItem";
import { postListAtom } from "./recoil/posts";
import { PostListProps, PostType } from "./types";

export default function PostList() {
  const [posts, setPosts] = useRecoilState(postListAtom);
  const handleDeletePost = (postId: number) => () => {
    alert("Click me: " + postId);
    const newPosts = posts.filter((post: PostType) => post.id !== postId);
    setPosts(newPosts);
  };
  const handleAddPost = () => {
    const newPosts: PostListProps = posts.concat([
      {
        id: posts.length + 1,
        title: `post ${posts.length + 1}`,
        description: `des ${posts.length + 1}`,
        comments: [],
      },
    ]);
    setPosts(newPosts);
  };
  const listItems = posts ? (
    posts.map((post) => (
      <PostItem key={post.id} post={post} onClick={handleDeletePost} />
    ))
  ) : (
    <NoData />
  );

  return (
    <ul>
      {listItems}
      <button onClick={handleAddPost}>Add new Post</button>
    </ul>
  );
}
