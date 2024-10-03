import { useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { SideBarContent } from "./sidebarContent";
import { IconButton } from "../../iconButton";

export const SideHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation(); 

  return (
    <section className="side-header relative flex ">
      <div
        className={clsx(
          "border bg-white shadow-lg rounded-lg transition-all duration-300 flex flex-col justify-between items-center py-8 gap-8 w-56"
        )}
      >
        <div className="text-2xl font-semibold text-center">
          My <span className="text-[#EF8361]">Book</span> <br />
          Shelf
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col  space-y-2">
            {SideBarContent.map((item) => (
              <li
                key={item.route}
                className={clsx(
                  "flex items-center mt-12 ",
                  location.pathName === item.route
                    ? "bg-gray-400 text-white"
                    : "hover:bg-gray-200  active:bg-gray-500 rounded-sm",
                  isExpanded && "text-center"
                )}
              >
                <Link
                  to={item.route}
                  className="flex items-center p-2 rounded transition-colors duration-300"
                >
                  <IconButton icon={item.icon} className="text-blue-600" />
                  {!isExpanded && <span className="ml-2">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="list-none">
          <li>About</li>
          <li>Support</li>
          <li>Terms & Condition</li>
        </div>
      </div>
    </section>
  );
};
