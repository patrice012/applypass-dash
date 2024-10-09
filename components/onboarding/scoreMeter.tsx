export function ScoreMeter({ svgScore = 1 }: { svgScore: number }) {
  return (
    <div className="w-min">
      <div className="relative w-64 h-40 flex items-end justify-center">
        <div className="absolute w-full h-full rounded-full">
          <div className="absolute w-full h-full">{progressBar(100)}</div>
          <div className="absolute w-full h-full">
            {progressBar(svgScore, true)}
          </div>
        </div>
        <div className="text-center mb-1">
          <div className="text-gray-500">Score</div>
          <div className="text-xl font-semibold">{Math.round(svgScore)}%</div>
        </div>
      </div>
    </div>
  );
}

function progressBar(widthPerc: number, gradient = false) {
  const radius = 95;
  const dashArray = (Math.PI * radius * widthPerc) / 100;

  return (
    <svg
      width="100%"
      height="100%"
      className="flex items-center justify-center"
    >
      <circle
        cx="125"
        cy="125"
        r={radius}
        fill="none"
        strokeWidth="30"
        strokeLinecap="round"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${dashArray} 10000`}
        stroke={gradient ? "url(#score-gradient)" : "#e5e5e5"}
      ></circle>
      {gradient && (
        <defs>
          <linearGradient id="score-gradient">
            <stop offset="0%" stopColor="red" />
            <stop offset="20%" stopColor="orange" />
            <stop offset="66%" stopColor="yellow" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
