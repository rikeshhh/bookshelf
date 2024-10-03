import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Home } from "../../pages/Home";
import { BookDetail } from "../../pages/bookDetail";
import { MyShelf } from "../../pages/myShelf";
import { RecordTable } from "../../pages/recordTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookDetail",
        element: <BookDetail />,
      },
      {
        path: "/myShelf",
        element: <MyShelf />,
      },
      {
        path: "/recordTable",
        element: <RecordTable />,
      },
    ],
  },
]);
