import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export const useTask = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  const prepareTask = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).slice(2, 9),
        state: TaskState.CREATING,
        title: "",
      },
    ]);
  };

  const updateTask = async (id: string, payload: { title: Task["title"] }) => {
    setIsUpdatingTask(true);
    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.CREATED, ...payload }
          : task,
      ),
    );

    setIsUpdatingTask(false);
  };

  const updateTaskStatus = (id: string, concluded: Task["concluded"]) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
    );
  };

  const deleteTask = async (id: string, ms = 1000) => {
    setIsDeletingTask(true);
    await delay(ms);

    setTasks(tasks.filter((task) => task.id !== id));

    setIsDeletingTask(false);
  };

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
};
