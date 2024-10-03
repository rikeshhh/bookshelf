export const NewArrival = () => {
  return (
    <div className="flex max-w-[861px] border border-[#FA7C54] rounded-2xl overflow-x-hidden">
      <div className="p-2 bg-[#FA7C54] text-white vertical-align ">
        New Arrival
      </div>
      <div className="flex">
        {Array.from({ length: 8 }).map((_, index) => (
          <figure key={index} className="w-40 h-18  p-3">
            <img
              src="https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=6.0.33"
              alt=""
            />
          </figure>
        ))}
      </div>
    </div>
  );
};
