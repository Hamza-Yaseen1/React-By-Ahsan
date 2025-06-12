import { useEffect, useState } from "react";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const getPost = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonresp = await resp.json();
    setPosts(jsonresp);
    console.log({ jsonresp });
  };
  useEffect(() => {
    // component mounted
    getPost();
  }, []);
  return (
    <section>
      <div>PostPage</div>
      <button>CLick me</button>
      {posts.map((postItem) => {
        return (
          <div className="my-10">
            <h1 className="text-xl">{postItem.title}</h1>
            <p>{postItem.body}</p>
          </div>
        );
      })}
    </section>
  );
};
export default PostsPage;
