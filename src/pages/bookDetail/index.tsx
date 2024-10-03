import { AuthorDetail } from "./authorDetail/index.tsx";
import { BookDetailCart } from "./bookDetailCart.tsx";

export const BookDetail = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <BookDetailCart />
      <AuthorDetail />
    </div>
  );
};
