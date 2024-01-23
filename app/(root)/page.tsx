import { fetchPosts } from "@/lib/actions/thread.actions";

async function Home() {
  const result = await fetchPosts(1, 20);
  console.log(result);
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}

export default Home;
