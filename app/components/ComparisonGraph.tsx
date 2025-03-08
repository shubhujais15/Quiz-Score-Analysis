'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ComparisonGraphProps {
  percentile: number;
}

export default function ComparisonGraph({ percentile }: ComparisonGraphProps) {
  // Generate data points with the user's percentile highlighted
  const data = [
    { x: 0, y: 5, isUser: false },
    { x: 20, y: 15, isUser: false },
    { x: percentile, y: 25, isUser: true },
    { x: 72, y: 40, isUser: false }, // Average percentile
    { x: 100, y: 10, isUser: false },
  ].sort((a, b) => a.x - b.x); // Sort by x value to ensure proper line rendering

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <h2 className="text-xl font-semibold mb-4">Comparison Graph</h2>
      <p className="text-gray-600 mb-4">
        You scored <span className="font-semibold">{percentile}% percentile</span> which is lower than the
        average percentile 72% of all the engineers who took this assessment
      </p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="x" 
              type="number"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis />
            <Tooltip 
              formatter={(value, name, props) => [
                `${value}`, 
                props.payload.isUser ? 'Your Score' : 'Other Students'
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#4F46E5" 
              strokeWidth={2}
              dot={(props) => {
                if (props.payload.isUser) {
                  return (
                    <circle
                      cx={props.cx}
                      cy={props.cy}
                      r={6}
                      fill="#4F46E5"
                      stroke="white"
                      strokeWidth={2}
                    />
                  );
                }
                return (
                  <circle
                    cx={props.cx}
                    cy={props.cy}
                    r={4}
                    fill="#4F46E5"
                  />
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}