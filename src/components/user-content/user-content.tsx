import { Button, Container } from "react-bootstrap";
import UserCard from "../user-card/user-card";
import { AppRoute } from "../../const";
import { useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import PostsList from "../posts-list/posts-list";

function UserContent(): JSX.Element {
  const users = useAppSelector((state) => state.USER.users);
  const posts = useAppSelector((state) => state.POSTS.postsDefault)

  const params = useParams();
  const user = users.find((item) => item.id === Number(params.id));

  const postsByUser = posts.filter((item) => item.userId === user?.id);

  return (
    <main className="main">
      <Container>
        <Button
          className="mt-5"
          variant="outline-secondary"
          href={AppRoute.Main}
        >
          Назад
        </Button>{' '}

        <UserCard user={user}/>

        <h2 className="display-6 text-center mb-4">Посты пользователя</h2>
        <PostsList posts={postsByUser}/>
      </Container>
    </main>
  )
}

export default UserContent;