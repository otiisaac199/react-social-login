import { useLocation } from "react-router-dom";
import { posts } from "../data";

const Posts = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);
  return (
    <div className="flex flex-col items-center">
      <img
        src={post?.img}
        alt="postImg"
        className="w-[100%] h-[300px] object-cover mb-[20px]"
      />
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p className="px-[100px] text-2xl font-[300] text-gray-500 mt-10">
        {post?.desc}{" "}
      </p>
      <p className="pt-[50px] p-[100px] text-[18px] leading-6">
        {post?.longDesc}{" "}
      </p>
    </div>
  );
};

export default Posts;
