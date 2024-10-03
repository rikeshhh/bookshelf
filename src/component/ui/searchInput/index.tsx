import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
interface SearchProps {
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder = "Search..." }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("first");
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={onChange}
        className="min-w-[1200px] px-4 rounded-full py-2 pl-10 pr-4 text-gray-700 bg-white border  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Search;
