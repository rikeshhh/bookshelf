import React from "react";
import { Link } from "react-router-dom";

interface BookItem {
  id: string;
  title: { value: string }[];
  rating: number;
  category: string;
  availability: string[];
}

interface CardProps {
  book: BookItem;
}

export const Card: React.FC<CardProps> = ({ book }: CardProps) => {
  const bookInfo = book.title[0]; 

  return (
    <Link to={`/bookDetail/${book.id}`}>
      <div className="p-5 shadow-lg bg-white border rounded-lg">
        <figure className=" border-b-0">
          <img
            src={bookInfo.image || "https://via.placeholder.com/150"}
            alt={bookInfo.title || "Book cover"}
            className="w-full object-fill max-h-[120px]"
          />
        </figure>
        <div className="py-3 flex flex-col justify-start items-start gap-1">
          <span>{bookInfo.author}</span>
          <h2 className="font-semibold">{bookInfo.title || "Unknown Title"}</h2>
          <span>{book.category}</span>
          <span>Rating: {book.rating}/5</span>
        </div>
      </div>
    </Link>
  );
};
interface BookCategoryProps {
  title: string;
  length: number;
  bookData: BookItem[];
}

export const BookCategory: React.FC<BookCategoryProps> = ({
  title,
  length,
  bookData,
}: BookCategoryProps) => {
  if (!Array.isArray(bookData) || bookData.length === 0) {
    console.warn(`No book data available for category: ${title}`);
    return null;
  }

  return (
    <div className="flex flex-col items-start justify-start">
      <h2 className="text-2xl text-[#4d4d4d] font-semibold">{title}</h2>
      <div className="grid grid-cols-4 gap-14 py-2">
        {bookData.slice(0, length).map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
