import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface Customer {
  id: number;
  Name: string;
  Contact: string;
  "Address ": string;
  "Quantity ": number;
  Date: string;
  "Price ": string;
  "Status ": string;
  "Payment Method": string;
  "Action ": string;
}
export interface CustomerFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cylinderType: string;
  notes: string;
}

export interface ActivityCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  status: string;
  itemsCount: number;
  progressColor: string; // Tailwind color class
  className?: string;
  percentage: number;
}
export interface ProgressBarProps {
  color: string;
  percentage: number;
}
export interface IconButtonProps {
  icon: IconType;
  onClick?: () => void;
  badge?: number;
  className?: string;
}
export interface DropdownItem {
  name: string;
  path: string;
}

export interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface ReportItemsProps {
  icon: IconType;
  status: string;
  itemsCount: number; 
  percentage: number;
  className?: string;
  progressColor?: string;
}

export interface TransactionFormValues {
  name: string;
  qty: number;
  amount: number;
  payment: string;
  status: "Pending" | "Done";
}
export interface BookInfo {
  image: string;
  title: string;
  author: string;
  date: Date;
  edition: string;
}

export interface TableRowProps {
  title: BookInfo[];
  rating: number;
  category: string;
  availability: string[];
  className?: string;
}

export interface BookRowData {
  image: JSX.Element;
  title: string;
  author: string;
  date: string;
  edition: string;
  rating: number;
  category: string;
  availability: string;
}

