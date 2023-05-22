import Post from "../post/post";

function PostsListUser(): JSX.Element {
  return (
    <div className="posts-list-wrapper">
      <h2 className="display-6 mb-4">Посты пользователя</h2>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostsListUser;