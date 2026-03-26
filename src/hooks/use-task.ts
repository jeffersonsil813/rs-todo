import { TaskState } from "../models/task";
import { useTasksData } from "./use-tasks-data";

export const useTask = () => {
  const { tasks, setTasks } = useTasksData();

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

  return {
    prepareTask,
  };
};
