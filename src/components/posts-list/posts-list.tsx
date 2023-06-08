// import { useAppSelector } from '../../hooks';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Post } from '../../types/user-data';
import PostItem from '../post-item/post-item';
import { useState } from 'react';

type PostsListProps = {
  posts: Post[];
}

function PostsList({posts}: PostsListProps): JSX.Element {
  const [page, setPage] = useState(1);

  const limitPostsOnPage = 5;

  const indexFirstActualPost = limitPostsOnPage * (page - 1);
  const postsOnPage = posts.slice(indexFirstActualPost, indexFirstActualPost + 5);
	console.log('TCL: postsOnPage', postsOnPage)

  return (
    <div className="posts-list-wrapper">
      {postsOnPage.map((post) => {
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

      <PaginationControl
        page={page}
        between={4}
        total={posts.length}
        limit={limitPostsOnPage}
        changePage={(page) => {
          setPage(page); 
          console.log(page);
        }}
        ellipsis={1}
      />
    </div>
  )
}

export default PostsList;