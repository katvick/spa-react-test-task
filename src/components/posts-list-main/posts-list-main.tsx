import { useAppSelector } from "../../hooks";
import Post from "../post-item/post-item";

function PostsListMain(): JSX.Element {
  const posts = useAppSelector((state) => state.POSTS.posts);

  return (
    <div className="posts-list-wrapper">
      {posts.map((post) => {
        const keyValue = `${post.id}-post`
        return (
          <Post
            key={keyValue}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        )
      })}
    </div>
  )
}

export default PostsListMain;