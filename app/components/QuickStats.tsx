'use client';

interface QuickStatsProps {
  stats: {
    rank: number;
    percentile: number;
    score: number;
  };
}

export default function QuickStats({ stats }: QuickStatsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-yellow-500 text-2xl">🏆</span>
          <div>
            <div className="text-2xl font-bold">{stats.rank}</div>
            <div className="text-sm text-gray-500">YOUR RANK</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-2xl">📋</span>
          <div>
            <div className="text-2xl font-bold">{stats.percentile}%</div>
            <div className="text-sm text-gray-500">PERCENTILE</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-500 text-2xl">✓</span>
          <div>
            <div className="text-2xl font-bold">{stats.score}/15</div>
            <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
}