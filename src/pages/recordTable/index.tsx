import TableRow from "../../component/ui/table/tablerow";
import { CustomertableHeaders, tableRowData } from "../../data";
import { useFetchBooks } from "../../hooks/useFetchBooks";

export const RecordTable = () => {
  const { bookData, loading, error } = useFetchBooks(); 
  console.log(bookData, "bookdata");
  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>; 
  }

  return (
    <table className="min-w-full border-collapse  border-gray-200">
      <thead>
        <tr>
          {CustomertableHeaders.map((header) => (
            <th key={header} className="px-4 py-2">
              {header.charAt(0).toUpperCase() + header.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bookData.length > 0 ? (
          bookData.map((data, index) => (
            <TableRow
              key={index}
              rowData={data}
              headers={CustomertableHeaders}
            />
          ))
        ) : (
          <tr>
            <td
              colSpan={CustomertableHeaders.length}
              className="text-center py-4"
            >
              No data found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
