import { Link } from "react-router-dom";
import { cardProps } from "../../../interface";

export const Card: React.FC<cardProps> = ({
  title,
  image,
  author,
}: cardProps) => {
  return (
    <Link to="/bookDetail">
      <div className="p-5 shadow-lg bg-white border rounded-lg">
        <figure className="max-w-[220px] max-h-[170px] border-b-0">
          <img
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="py-3 flex flex-col justify-start items-start gap-1">
          <h2 className="font-semibold">{title}</h2>
          <span>{author}</span>
        </div>
      </div>
    </Link>
  );
};
