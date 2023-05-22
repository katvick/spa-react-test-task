import Post from "../post/post";

function PostsListMain(): JSX.Element {
  return (
    <div className="posts-list-wrapper">
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostsListMain;