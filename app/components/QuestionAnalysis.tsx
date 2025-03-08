'use client';

interface QuestionAnalysisProps {
  score: number;
}

export default function QuestionAnalysis({ score }: QuestionAnalysisProps) {
  // Calculate the percentage for the circular progress
  const percentage = (score / 15) * 100;
  const circumference = 2 * Math.PI * 90; // radius = 90
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Question Analysis</h2>
        <span className="text-blue-600 font-semibold">{score}/15</span>
      </div>
      <p className="text-gray-600 mb-4">
        You scored {score} questions correct out of 15. However it still needs some improvements
      </p>
      <div className="flex justify-center">
        <div className="relative w-48 h-48">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="90"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <circle
              cx="96"
              cy="96"
              r="90"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-800">{Math.round(percentage)}%</span>
              <span className="text-sm text-gray-500">Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}