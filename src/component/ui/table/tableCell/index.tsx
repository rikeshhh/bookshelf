
import React from "react";
import clsx from "clsx";

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
  return (
    <td className={clsx("border border-gray-200 px-4 py-2", className)}>
      {children}
    </td>
  );
};

export default TableCell;
