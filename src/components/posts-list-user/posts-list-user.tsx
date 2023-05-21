import Post from "../post/post";

function PostsListUser(): JSX.Element {
  return (
    <div className="posts-list-wrapper">
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostsListUser;