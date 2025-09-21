import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { FiPlus } from 'react-icons/fi';


export default function AddTaskForm({ defaultStatus = 'todo' }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('low');

  const createTask = () => {
    if (!title.trim()) return;
    const newTask = {
      id: 't' + Date.now(),
      title: title.trim(),
      description: desc.trim(),
      priority,
      status: defaultStatus,
      comments: 0
    };
    dispatch(addTask(newTask));
    setTitle(''); setDesc(''); setPriority('low'); setOpen(false);
  };

  return (
    <div className="w-80">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          <FiPlus /> Add Task
        </button>
      ) : (
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 border rounded" />
          <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="w-full mb-2 p-2 border rounded" rows={3}/>
          <div className="flex gap-2 mb-2">
            <select value={priority} onChange={e=>setPriority(e.target.value)} className="p-2 border rounded">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={createTask} className="px-3 py-2 bg-green-600 text-white rounded">Create</button>
            <button onClick={() => setOpen(false)} className="px-3 py-2 bg-gray-200 rounded">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
