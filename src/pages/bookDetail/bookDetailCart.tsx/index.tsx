import React from "react";
import { Button } from "../../../component/ui/button";

export const BookDetailCart = () => {
  return (
    <div className="flex items-center">
      <div>
        <figure>
          <img
            src="https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.33"
            alt=""
          />
        </figure>
        <div>fdgdgd</div>
      </div>
      <div>
        <h2>Book Title</h2>
        <span>By Author</span>
        <span>Second Edition</span>
        <div>
          <Button title="Borrow" />
          <Button title="Read Now" />
        </div>
      </div>
    </div>
  );
};
