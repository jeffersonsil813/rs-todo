import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import Button from "../components/button";
import { useTasks } from "../hooks/use-tasks";
import TaskItem from "./task-item";

const Taskslist = () => {
  const { tasks } = useTasks();

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} />
        ))}
      </section>
    </>
  );
};

export default Taskslist;
