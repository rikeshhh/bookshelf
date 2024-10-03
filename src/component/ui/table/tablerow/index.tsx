import React from "react";
import { BookRowData } from "../../../../type";
import TableCell from "../tableCell";

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

const TableRow: React.FC<TableRowProps> = ({ rowData, headers }) => {
  const titleInfo = rowData.title[0]; 
  return (
    <tr>
      {headers.map((header) => {
        if (header === "title") {
          return (
            <TableCell key={header}>
              <div className="flex items-center">
                {titleInfo.image && (
                  <img
                    src={titleInfo.image}
                    alt={titleInfo.title}
                    className="w-10 h-10 mr-2"
                  />
                )}
                <div>
                  <div className="font-semibold">{titleInfo.title}</div>
                  <div>Author: {titleInfo.author}</div>
                  <div>Date: {titleInfo.date}</div>
                  <div>Edition: {titleInfo.edition}</div>
                </div>
              </div>
            </TableCell>
          );
        }
        return <TableCell key={header}>{rowData[header] ?? ""}</TableCell>;
      })}
    </tr>
  );
};

export default TableRow;
