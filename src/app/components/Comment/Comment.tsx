import { CheckUserSession } from "../CheckUserSession/CheckUserSession";

type CommentProp = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Comment: React.FC<{ postId: number }> = async ({ postId: id }) => {
  const comment = (await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  ).json()) as CommentProp;

  return (
    <div>
      <CheckUserSession
        userId={comment.id}
        otherwise={<div>Protected comment!</div>}
        // skeleton={() => <Loader />}
      >
        <h2>{comment.name}</h2>
        <div>{comment.body}</div>
      </CheckUserSession>
    </div>
  );
};

export const CommentNonAsync: React.FC<{ postId: number }> = ({
  postId: id,
}) => {
  const comment = {
    postId: Math.round(Math.random() * 10),
    id: Math.round(Math.random() * 100),
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "accusamus beatae ad facilis cum similique qui sunt",
  } as CommentProp;

  return (
    <div>
      <CheckUserSession
        userId={comment.id}
        otherwise={<div>Protected comment!</div>}
        // skeleton={() => <Loader />}
      >
        <h2>{comment.name}</h2>
        <div>{comment.body}</div>
      </CheckUserSession>
    </div>
  );
};
