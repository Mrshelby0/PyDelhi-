import React from 'react';

export default function Modal({open, onClose, speaker}) {
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <div className="flex justify-between items-start gap-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">P</span>
              <div>
                <h3 className="text-xl font-bold">{speaker?.name}</h3>
                <p className="text-sm text-gray-600">{speaker?.title}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="px-3 py-2 rounded border hover:bg-gray-50">Close</button>
        </div>
        <div className="mt-4 text-gray-700">{speaker?.bio}</div>
      </div>
    </div>
  )
}
