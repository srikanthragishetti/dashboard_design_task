import { createSlice } from '@reduxjs/toolkit';


const sampleTasks = [
  {
    id: 't1',
    title: 'Brainstorming',
    description: "Brainstorming brings team's diverse experience into play.",
    priority: 'high',
    status: 'todo',
    comments: 12
  },
  {
    id: 't2',
    title: 'Research',
    description: 'User research helps you to create an optimal product for users.',
    priority: 'high',
    status: 'todo',
    comments: 10
  },
  {
    id: 't3',
    title: 'Design System',
    description: 'It just needs to adapt the UI from what you did before',
    priority: 'medium',
    status: 'done',
    comments: 4
  },
];

const initialState = {
  items: sampleTasks,
  filters: { q: "" },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.items.push(action.payload);
    },
    updateTask(state, action) {
      const { id, changes } = action.payload;
      const idx = state.items.findIndex(t => t.id === id);
      if (idx >= 0) state.items[idx] = { ...state.items[idx], ...changes };
    },
    deleteTask(state, action) {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    moveTask(state, action) {
      // payload: { id, status }
      const { id, status } = action.payload;
      const idx = state.items.findIndex(t => t.id === id);
      if (idx >= 0) state.items[idx].status = status;
    },
    setTasks(state, action) {
      state.items = action.payload;
    }
  }
});


export const { addTask, updateTask, deleteTask, moveTask, setTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
