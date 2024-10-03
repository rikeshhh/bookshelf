import React, { useEffect, useState } from "react";
import { BookCategory } from "../../component/ui/bookCategory";
import { NewArrival } from "../../component/ui/newArrival";
import { Quote } from "../../component/ui/quote";
import {
  getAcademic,
  getArticles,
  getBooks,
  getRecent,
} from "../../utils/helper";

interface BookItem {
  id: string;
  title: { value: string }[];
  rating: number;
  category: string;
  availability: string[];
}

export const Home = () => {
  const [books, setBooks] = useState<BookItem[]>([]);
  const [articles, setArticles] = useState<BookItem[]>([]);
  const [academic, setAcademic] = useState<BookItem[]>([]);
  const [recent, setRecent] = useState<BookItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksData, articlesData, academicData, recentData] =
          await Promise.all([
            getBooks(),
            getArticles(),
            getAcademic(),
            getRecent(),
          ]);

        setBooks(booksData);
        setArticles(articlesData);
        setAcademic(academicData);
        setRecent(recentData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py-12">
      <div className="flex gap-12">
        <Quote className="" quote="There is hope" author="Rikesh" />
        <NewArrival />
      </div>
      <h2 className="flex justify-start mb-4 mt-10 text-3xl font-semibold">
        Good Morning
      </h2>
      <BookCategory title="Recommended For You" length={7} bookData={books} />
      <BookCategory title="Recent Reading" length={7} bookData={articles} />
      <BookCategory title="Academic Books" length={7} bookData={academic} />
      <BookCategory
        title="Journals, Articles & Paper Publications"
        length={7}
        bookData={recent}
      />
    </div>
  );
};
