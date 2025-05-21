import {AnimatePresence, Reorder} from "motion/react";
import Task, {type TaskType} from "./Task";
import type {FC} from "react";

interface TaskListProps {
  tasks: TaskType[];
  setTasks: (arr: TaskType[]) => void;
  onDelete: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({tasks = [], setTasks, onDelete}) => {

  return (
    <Reorder.Group axis="y" values={tasks} onReorder={setTasks} className="flex flex-col gap-3 w-full">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default TaskList;
