import { Post } from '../types/user-data';

export const sortBySearch = (posts: Post[], phrase: string) => {
  const searchText = phrase.toLowerCase();

  let sortPosts = [] as Post[];

  if (phrase.length === 0) {
    sortPosts = posts;
  } else {
    posts.forEach((post) => {
      const postTitle = post.title.toLowerCase();
  
      if (postTitle.indexOf(searchText) !== -1) {
        sortPosts.push(post);
      }
    })
  }

  return sortPosts;
}