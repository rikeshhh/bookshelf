export interface QuoteProps {
  className: string;
  quote: string;
  author: string;
}
export const Quote: React.FC<QuoteProps> = ({
  className,
  quote,
  author,
}: QuoteProps) => {
  return (
    <div
      className={`w-[547px] max-h-[233px]  border p-8 rounded-lg text-white bg-[#FA7C54] ${className}`}
    >
      <h2 className="text-lg">Today's Quote</h2>
      <p>{quote}</p>
      <p className="text-right">{author}</p>
    </div>
  );
};
