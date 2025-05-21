import Task from "./Task";
import type { FC } from "react";

interface TaskType {
  id: string;
  text: string;
}

interface TaskListProps {
  tasks: TaskType[];
  onDelete: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks = [], onDelete }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
