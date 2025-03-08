'use client';

import { useState } from 'react';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { rank: number; percentile: number; score: number }) => void;
  initialData: {
    rank: number;
    percentile: number;
    score: number;
  };
}

export default function UpdateModal({ isOpen, onClose, onSave, initialData }: UpdateModalProps) {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-2xl font-bold mb-6">Update scores</h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</div>
              <label className="font-medium">Update your Rank</label>
            </div>
            <input
              type="number"
              value={formData.rank}
              onChange={(e) => setFormData({ ...formData, rank: Number(e.target.value) })}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</div>
              <label className="font-medium">Update your Percentile</label>
            </div>
            <input
              type="number"
              value={formData.percentile}
              onChange={(e) => setFormData({ ...formData, percentile: Number(e.target.value) })}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</div>
              <label className="font-medium">Update your Current Score (out of 15)</label>
            </div>
            <input
              type="number"
              value={formData.score}
              onChange={(e) => setFormData({ ...formData, score: Number(e.target.value) })}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
          >
            save <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}