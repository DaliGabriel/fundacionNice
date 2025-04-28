const YellowLine = () => {
  return (
    <div
      className="absolute left-0 right-0 w-full custom-yellow-bar-height"
      style={{
        top: "500px", // same as BlogCover height
        background: "#F7A81B",
        height: "60px",
        zIndex: 10,
      }}
    />
  );
};

export default YellowLine;
