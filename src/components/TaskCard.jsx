import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: task.id });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`bg-gray-50 p-4 rounded-lg shadow-sm relative ${isDragging ? 'opacity-80 scale-105' : ''}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <span className={`inline-block text-xs px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-100 text-red-700' : task.priority === 'low' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>{task.priority || 'low'}</span>
          <h4 className="mt-2 font-semibold">{task.title}</h4>
          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
        </div>
        <div className="text-gray-400">
          <FiMoreHorizontal />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <FiMessageCircle /> <span>{task.comments ?? 0}</span>
        </div>
        {/* avatars etc could go here */}
      </div>
    </div>
  );
}


