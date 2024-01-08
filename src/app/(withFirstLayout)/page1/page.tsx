"use server";

interface IPost {
  id: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await posts.json();

  return data;
};

export default async function Page() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h1>Page 1</h1>
      {posts.map((post: IPost) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
