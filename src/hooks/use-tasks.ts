import { useTasksData } from "./use-tasks-data";

export const useTasks = () => {
  const { tasks } = useTasksData();

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
};
