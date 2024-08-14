import { title } from "process";
import { CheckUserSession } from "../CheckUserSession/CheckUserSession";

export type PhotoProp = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const Photo: React.FC<{ id: number }> = async ({ id }) => {
  const photo = (await (
    await fetch("https://jsonplaceholder.typicode.com/photos/" + id)
  ).json()) as PhotoProp;

  //   const photo = {
  //     albumId: Math.round(Math.random() * 10),
  //     id: Math.round(Math.random() * 100),
  //     title: "accusamus beatae ad facilis cum similique qui sunt",
  //     url: "https://via.placeholder.com/600/92c952",
  //     thumbnailUrl: "https://via.placeholder.com/150/92c952",
  //   };

  return (
    <div>
      <CheckUserSession
        userId={photo.albumId}
        otherwise={<div>Protected photo!</div>}
        // skeleton={() => <Loader />}
      >
        <h2>{title}</h2>
        <img src={photo.url} width={400} height={400} alt={photo.title} />
      </CheckUserSession>
    </div>
  );
};

export const PhotoNonAsync: React.FC<{ id: number }> = ({ id }) => {
  const photo = {
    albumId: Math.round(Math.random() * 10),
    id: Math.round(Math.random() * 100),
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  };

  return (
    <div>
      <CheckUserSession
        userId={photo.albumId}
        otherwise={<div>Protected photo!</div>}
        // skeleton={() => <Loader />}
      >
        <h2>{title}</h2>
        <img src={photo.url} width={400} height={400} alt={photo.title} />
      </CheckUserSession>
    </div>
  );
};
