// import { useAppSelector } from '../../hooks';
import { Post } from '../../types/user-data';
import PostItem from '../post-item/post-item';

type PostsListProps = {
  posts: Post[];
}

function PostsList({posts}: PostsListProps): JSX.Element {
  // const posts = useAppSelector((state) => state.POSTS.posts);

  return (
    <div className="posts-list-wrapper">
      {posts.map((post) => {
        const keyValue = `${post.id}-post`
        return (
          <PostItem
            key={keyValue}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        )
      })}
    </div>
  )
}

export default PostsList;