import { Posts, PostsProps } from "./Posts/Posts";

export const Page: React.FC<PostsProps> = async ({ type }) => {
  return (
    <div>
      <Posts type={type} />
    </div>
  );
};
