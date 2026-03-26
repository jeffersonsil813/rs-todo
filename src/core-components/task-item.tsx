import { cx } from "class-variance-authority";
import React, { useState } from "react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Text from "../components/text";
import { useTask } from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.CREATING,
  );
  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const { updateTask, updateTaskStatus } = useTask();

  const handleEdit = () => setIsEditing(true);

  const handleCancelEdit = () => setIsEditing(false);

  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTaskTitle(e.target.value || "");

  const handleSaveTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleChangeTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);
  };

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={!!task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEdit}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
            value={taskTitle}
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleCancelEdit}
            />
            <ButtonIcon icon={CheckIcon} type="submit" />
          </div>
        </form>
      )}
    </Card>
  );
};

export default TaskItem;
