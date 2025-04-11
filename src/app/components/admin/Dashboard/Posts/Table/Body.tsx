const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
};

export default Body;
