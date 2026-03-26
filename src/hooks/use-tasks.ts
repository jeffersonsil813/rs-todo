import { TaskState } from "../models/task";
import { useTasksData } from "./use-tasks-data";

export const useTasks = () => {
  const { tasks } = useTasksData();

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.CREATED).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
};
