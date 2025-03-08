const syllabusData = [
  { topic: 'HTML Tools, Forms, History', percentage: 80 },
  { topic: 'Tags & References in HTML', percentage: 60 },
  { topic: 'Tables & References in HTML', percentage: 24 },
  { topic: 'Tables & CSS Basics', percentage: 96 },
];

export default function SyllabusAnalysis() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Syllabus Wise Analysis</h2>
      <div className="space-y-4">
        {syllabusData.map((item) => (
          <div key={item.topic}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-700">{item.topic}</span>
              <span className="text-sm font-semibold">{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  item.percentage >= 80
                    ? 'bg-green-500'
                    : item.percentage >= 60
                    ? 'bg-blue-500'
                    : item.percentage >= 40
                    ? 'bg-orange-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}