import { useState } from "react";
import { NoData } from "./components/Nodata";
import { PostItem } from "./components/postItem";
import { PostType, PostListProps } from "./types";

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

export default function PostList() {
  const [posts, setPosts] = useState(initialPosts);
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
