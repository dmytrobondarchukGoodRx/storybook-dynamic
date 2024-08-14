import { Suspense } from "react";
import { CheckUserSession } from "../CheckUserSession/CheckUserSession";
import { CheckUserSessionDynamic } from "../CheckUserSession/CheckUserSessionDynamic";
import { Comment, CommentNonAsync } from "../Comment/Comment";
import { Loader } from "../Loader/Loader";
import { Photo, PhotoNonAsync } from "../Photos/Photos";
import { allPosts } from "./data";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsProps = {
  type:
    | "dynamic"
    | "static"
    | "dynamic-child-non-async"
    | "dynamic-all-non-async";
};

const renderPost = (post: Post, type: PostsProps["type"]) => {
  switch (type) {
    case "dynamic":
      return (
        <Suspense fallback={<Loader />}>
          <CheckUserSessionDynamic
            userId={post.userId}
            key={post.id}
            otherwise={<Photo id={post.id} />}
            skeleton={() => <Loader />}
          >
            <Comment postId={post.id} />
          </CheckUserSessionDynamic>
        </Suspense>
      );

    case "static":
      return (
        <Suspense fallback={<Loader />}>
          <CheckUserSession
            userId={post.userId}
            key={post.id}
            otherwise={<Photo id={post.id} />}
          >
            <Comment postId={post.id} />
          </CheckUserSession>
        </Suspense>
      );

    case "dynamic-child-non-async":
      return (
        <Suspense fallback={<Loader />}>
          <CheckUserSessionDynamic
            userId={post.userId}
            key={post.id}
            otherwise={<PhotoNonAsync id={post.id} />}
            skeleton={() => <Loader />}
          >
            <CommentNonAsync postId={post.id} />
          </CheckUserSessionDynamic>
        </Suspense>
      );
  }
};

export const PostsAsync: React.FC<PostsProps> = async ({ type }) => {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = (await postsResponse.json()) as Post[];

  return <div>{posts.map((post) => renderPost(post, type))}</div>;
};

export const Posts: React.FC<PostsProps> = ({ type }) => {
  if (type === "dynamic-all-non-async") {
    const posts = allPosts;
    return (
      <div>
        {posts.map((post) => renderPost(post, "dynamic-child-non-async"))}
      </div>
    );
  }

  return <PostsAsync type={type} />;
};
