import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const LS_KEY = 'creative-upaay-state';

const loadFromLocalStorage = () => {
  try {
    const s = localStorage.getItem(LS_KEY);
    if (!s) return undefined;
    return JSON.parse(s);
  } catch (e) {
    console.warn('Failed to load state', e);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state', e);
  }
};

const preloaded = loadFromLocalStorage();

const store = configureStore({
  reducer: { tasks: tasksReducer },
  preloadedState: preloaded
});

store.subscribe(() => {
  saveToLocalStorage({
    tasks: store.getState().tasks
  });
});

export default store;
