/* import { create } from "zustand";

export interface Task {
  uuid?: number;
  status?: boolean;
  task: string;
  description: string;
}

export interface FormState {
  listTask: Task[];
  addNewTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  editTask: (taskId: number, updatedTask: Task) => void;
}

const localStorageKey = "yourLocalStorageKey";
export const useFormStore = create<FormState>((set) => {
  const storedListTask = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );

  return {
    listTask: storedListTask,
    addNewTask: (newTask) => {
      set((state) => {
        const updatedList = [...state.listTask, newTask];
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      });
    },
    removeTask: (taskId) =>
      set((state) => {
        const updatedList = state.listTask.filter(
          (task) => task.uuid !== taskId
        );
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      }),

    editTask: (taskId, updatedTask) =>
      set((state) => {
        const updatedList = state.listTask.map((task) =>
          task.uuid === taskId ? { ...task, ...updatedTask } : task
        );
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      }),
    
  };
});
 */

import { create } from "zustand";

export interface Task {
  uuid?: number;
  status?: boolean;
  task: string;
  description: string;
}

export interface FormState {
  listTask: Task[];
  addNewTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  editTask: (taskId: number, updatedTask: Task) => void;
  toggleTaskStatus: (taskId: number) => void;
}

const localStorageKey = "yourLocalStorageKey";
export const useFormStore = create<FormState>((set) => {
  const storedListTask = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );

  return {
    listTask: storedListTask,
    addNewTask: (newTask) => {
      set((state) => {
        const updatedList = [...state.listTask, newTask];
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      });
    },
    removeTask: (taskId) =>
      set((state) => {
        const updatedList = state.listTask.filter(
          (task) => task.uuid !== taskId
        );
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      }),

    editTask: (taskId, updatedTask) =>
      set((state) => {
        const updatedList = state.listTask.map((task) =>
          task.uuid === taskId ? { ...task, ...updatedTask } : task
        );
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      }),

    toggleTaskStatus: (taskId) =>
      set((state) => {
        const updatedList = state.listTask.map((task) =>
          task.uuid === taskId ? { ...task, status: !task.status } : task
        );
        localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
        return { listTask: updatedList };
      }),
  };
});
