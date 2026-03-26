import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export const useTasksData = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    setTasks,
  };
};
