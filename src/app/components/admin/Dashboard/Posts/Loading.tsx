const Loading = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="loader">
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="b"
            >
              <stop stopColor="#4B6FFF"></stop>
              <stop stopColor="#2E3FE5" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0"
              y1="64"
              x1="0"
              id="c"
            >
              <stop stopColor="#FF3BD6"></stop>
              <stop stopColor="#E430BA" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="d"
            >
              <stop stopColor="#00E5D2"></stop>
              <stop stopColor="#00C9B8" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="e"
            >
              <stop stopColor="#00E5D2"></stop>
              <stop stopColor="#00C9B8" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height="64"
          width="64"
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#b)"
            d="M15 50V14h10l24 25V14h10v36H49L25 25v25H15z"
            className="dash"
            pathLength="360"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height="64"
          width="64"
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#c)"
            d="M32 14v36"
            className="dash"
            pathLength="360"
          />
          <circle cx="32" cy="8" r="4" fill="url(#c)" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height="64"
          width="64"
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#d)"
            d="M46 44c-3.7 3.7-8.8 6-14.4 6-11 0-20-9-20-20s9-20 20-20c5.6 0 10.7 2.3 14.4 6"
            className="dash"
            pathLength="360"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height="64"
          width="64"
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#e)"
            d="M32 50c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18H14"
            className="dash"
            pathLength="360"
          />
        </svg>
      </div>
      <style jsx>{`
        .loader {
          display: flex;
          margin: 0.25em 0;
          align-items: center;
        }
        .w-2 {
          width: 0.5em;
        }
        .dash {
          animation: dashArray 2s ease-in-out infinite,
            dashOffset 2s linear infinite;
        }
        @keyframes dashArray {
          0% {
            stroke-dasharray: 0 1 359 0;
          }
          50% {
            stroke-dasharray: 0 359 1 0;
          }
          100% {
            stroke-dasharray: 359 1 0 0;
          }
        }
        @keyframes dashOffset {
          0% {
            stroke-dashoffset: 365;
          }
          100% {
            stroke-dashoffset: 5;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
