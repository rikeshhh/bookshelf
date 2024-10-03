import { Card } from "../card";
import { Button } from "../button";
import { getBooks } from "../../../utils/helper";
import { useEffect, useState } from "react";

export const CardOnShelf = ({ length }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  console.log(bookData, "Book Data:");

  return (
    <div className="grid grid-cols-3 gap-4">
      {" "}
      {bookData.map((book) => (
        <div
          className="flex p-2 justify-start items-start gap-2 w-[408px] bg-white rounded-lg shadow-lg"
          key={book.id}
        >
          <Card
            image={book.title[0]?.image || "default_image_url"}
            title={book.title[0]?.title}
            author={book.title[0]?.author || "Unknown Author"}
          />
          <div className="p-4">
            <div className="flex flex-col gap-2 mb-4">
              <h4>Borrowed on: {book.title[0]?.date}</h4>{" "}
              <span>Edition: {book.title[0]?.edition}</span>{" "}
            </div>
            <div className="flex flex-col gap-2 mb-">
              <h4>Description:</h4>
              <span>{book.title[0]?.description}</span>{" "}
            </div>
            <div className="flex flex-col gap-2 mb-">
              <h4>Availability:</h4>
              <span>{book.availability.join(", ")}</span>{" "}
            </div>
            <Button
              title="Borrowed"
              type="submit"
              color="secondary"
              size="medium"
              className="uppercase my-2"
            >
              Borrowed
            </Button>
            <Button
              title="Return"
              type="submit"
              color="danger"
              size="medium"
              className="uppercase"
            >
              Returned
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
