
interface ErrorTextProps {
  message?: string;
};


export default function ErrorText({ message }: ErrorTextProps) {
  if (!message) return null;
  return (
    <p className="text-red-500">{message}</p>
  );
};