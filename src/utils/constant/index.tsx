import { Home } from "../../component/ui/icons/home";
import { SearchIcon } from "../../component/ui/icons/searchIcon";
import { Shelft } from "../../component/ui/icons/shelft";
export const API_URL = "http://localhost:3000";
export const navBody = [
  {
    label: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    label: "Search",
    icon: <SearchIcon />,
    route: "/",
  },
  {
    label: "My Shelf",
    icon: <Shelft />,
    route: "/myShelf",
  },
];

export const navFooter = ["About", "Support", "Terms & Condition"];

export const tableHeaders = [
  "title",
  "rating",
  "category",
  "availability",
  "status",
];
