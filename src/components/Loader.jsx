import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const radius = 35; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (progress / 100) * circumference; // Calculate the offset based on progress

  return (
    <Html
      as='div'
      center
      className="flex justify-center items-center flex-col"
    >
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="text-blue-500 stroke-current transition-all duration-300"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
      </svg>
      <p className="text-sm text-gray-200 mt-3">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
