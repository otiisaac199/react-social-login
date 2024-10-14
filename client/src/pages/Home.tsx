import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  return (
    <div className="flex justify-between py-[50px] px-[100px] flex-wrap ">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
