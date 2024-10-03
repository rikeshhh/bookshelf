import { useState, useEffect } from "react";
import { getBooks } from "../utils/helper";

export const useFetchBooks = () => {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBookData(data);
        setLoading(false); 
      })
      .catch((err) => {
        setError(err);
        setLoading(false); 
      });
  }, []);

  return { bookData, loading, error }; 
};
