import { CardOnShelf } from "../../component/ui/cardOnShelf";
import { Notes } from "../../component/ui/notes";

export const MyShelf = () => {
  return (
    <div>
      <CardOnShelf length={7} />
      <div>
        <h2>Notes & Bookmarks</h2>
        {Array.from({ length: 4 }).map((_, index) => (
          <Notes className="" title="dsfsfsda" />
        ))}
      </div>
    </div>
  );
};
