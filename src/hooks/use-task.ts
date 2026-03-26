import { TaskState, type Task } from "../models/task";
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

  const updateTask = (id: string, payload: { title: Task["title"] }) => {
    setTasks((prev) =>
      (prev || []).map((task) =>
        task.id === id
          ? { ...task, state: TaskState.CREATED, ...payload }
          : task,
      ),
    );
  };

  return {
    prepareTask,
    updateTask,
  };
};
