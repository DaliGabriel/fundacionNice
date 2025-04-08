const YellowWave = () => {
  return (
    <div className="absolute left-0 bottom-0">
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90 transform translate-x-[-10%] translate-y-[40%]"
      >
        <path
          d="M0 0C0 0 100 0 200 50C300 100 400 100 400 100V200H0V0Z"
          fill="#FFA800"
          stroke="#FFB800"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default YellowWave;
