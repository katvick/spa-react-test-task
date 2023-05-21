import { Button, Container } from "react-bootstrap";
import UserCard from "../user-card/user-card";
import { AppRoute } from "../../const";
import PostsListUser from "../posts-list-user/posts-list-user";

function UserContent(): JSX.Element {
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

        <UserCard />

        <PostsListUser />
      </Container>
    </main>
  )
}

export default UserContent;