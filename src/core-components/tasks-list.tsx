import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import Button from "../components/button";
import { useTask } from "../hooks/use-task";
import { useTasks } from "../hooks/use-tasks";
import { TaskState, type Task } from "../models/task";
import TaskItem from "./task-item";

const Taskslist = () => {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  return (
    <>
      <section>
        <Button
          disabled={
            tasks.some((task) => task.state === TaskState.CREATING) ||
            isLoadingTasks
          }
          icon={PlusIcon}
          className="w-full"
          onClick={prepareTask}
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {isLoadingTasks ? (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </section>
    </>
  );
};

export default Taskslist;
