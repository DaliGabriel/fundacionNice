const YellowLineCircle = () => {
  return (
    <>
      <div className="absolute right-0 top-0">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-40 transform translate-x-[-40%] translate-y-[20%]"
        >
          <path
            d="M150 300C232.843 300 300 232.843 300 150C300 67.1573 232.843 0 150 0"
            stroke="yellow"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
    </>
  );
};

export default YellowLineCircle;
