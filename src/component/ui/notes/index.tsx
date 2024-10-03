export interface NoteProps {
  className: string;
  title: string;
}
export const Notes: React.FC<NoteProps> = ({ className, title }: NoteProps) => {
  return <div className={className}>{title}</div>;
};
