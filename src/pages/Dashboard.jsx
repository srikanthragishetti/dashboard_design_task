import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Column from '../components/Column';
import AddTaskForm from '../components/AddTaskForm';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { moveTask } from '../redux/tasksSlice';

const STATUSES = [
  { id: 'todo', title: 'To Do' },
  { id: 'inprogress', title: 'On Progress' },
  { id: 'done', title: 'Done' }
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const tasks = useSelector(s => s.tasks.items);
  const sensors = useSensors(useSensor(PointerSensor));

  const grouped = useMemo(() => {
    return {
      todo: tasks.filter(t => t.status === 'todo'),
      inprogress: tasks.filter(t => t.status === 'inprogress'),
      done: tasks.filter(t => t.status === 'done'),
    };
  }, [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // active.id: task id; over.id: droppable id like "column:todo"
    if (!over) return;
    if (over.id && over.id.startsWith('column:')) {
      const newStatus = over.id.replace('column:', '');
      dispatch(moveTask({ id: active.id, status: newStatus }));
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Header />
          <div className="mt-6">
            {/* Filter bar could go here */}
            <div className="flex gap-4 mt-4">
              {STATUSES.map(s => (
                <Column key={s.id}
                        status={s.id}
                        title={s.title}
                        tasks={grouped[s.id] || []} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Floating small form to add tasks easily */}
      <div className="fixed bottom-6 right-6">
        <AddTaskForm defaultStatus="todo" />
      </div>
    </DndContext>
  );
}
