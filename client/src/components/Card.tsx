import { Link } from "react-router-dom";

type CardProps = {
  post: {
    id: number;
    title: string;
    img: string;
    desc: string;
  };
};

const Card = ({ post }: CardProps) => {
  return (
    <div className="w-[100%] p-8 shadow-lg rounded-md">
      <Link to={`/post/${post.id}`}>
        <span>{post.title}</span>
        <img
          className="w-[100%] h-[200px] object-cover my-6"
          src={post.img}
          alt={post.title}
        />
        <p className="text-dark-col mb-[20px] leading-6">{post.desc}</p>
        <button className="rounded-xl bg-bg-dark-col text-white p-2.5 font-bold">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default Card;
