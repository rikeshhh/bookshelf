import { BookRowData } from "../type";

export interface cardProps {
  title: string;
  image: string;
  author: string;
}
export interface TableRowProps {
  rowData: {
    title: {
      image: string;
      title: string;
      author: string;
      date: Date;
      edition: string;
    }[];
    rating: number;
    category: string;
    availability: string[];
  };
  headers: (keyof BookRowData)[];
}