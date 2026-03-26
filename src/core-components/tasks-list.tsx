import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./task-item";

const Taskslist = () => {
  return <>
    <section>
        <Button icon={PlusIcon} className="w-full">Nova Tarefa</Button>
    </section>
    <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
    </section>
  </>;
};

export default Taskslist;