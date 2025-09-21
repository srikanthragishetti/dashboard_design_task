import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';

export default function Column({ status, title, tasks = [] }) {
  const { setNodeRef } = useDroppable({ id: `column:${status}` });

  return (
    <div ref={setNodeRef} className="flex-1 bg-white rounded-lg p-4 shadow-sm min-h-[60vh]">

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title} <span className="text-sm text-gray-400">({tasks.length})</span></h3>
        {/* ToDo ,OnProgress, Done  filtering accordingly by adding tasks etc */}
      </div>
         

      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
