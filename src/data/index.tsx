import { BookRowData } from "../type";
export const CustomertableHeaders: (keyof BookRowData)[] = [
  "title",
  "rating",
  "category",
  "availability",
];

export const tableRowData = [
  {
    title: [
      {
        image: "",
        title: "Title 1",
        author: "Author 1",
        date: new Date(),
        edition: "First Edition",
      },
    ],
    rating: 5,
    category: "Fiction",
    availability: ["HardCopy", "Ebook", "Audiobook"],
  },
];