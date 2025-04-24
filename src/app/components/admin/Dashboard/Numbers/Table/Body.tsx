interface BodyProps {
  children: React.ReactNode;
}

export const Body = ({ children }: BodyProps) => {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};
