import { GripVertical, Trash2 } from 'lucide-react';
import type { FC } from "react";

export interface TaskType {
  id: string; // Ensure id is a string throughout the project
  text: string;
}

interface TaskProps {
  task: TaskType;
  onDelete: (id: string) => void;
}

const Task: FC<TaskProps> = ({ task, onDelete }) => {
  if (!task) return null;

  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100 w-full">
      <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing">
        <GripVertical size={20}/>
      </button>

      <span className="flex-1 text-gray-700">{task.text}</span>

      <button
        onClick={() => onDelete(task.id)}
        className="p-1 rounded hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors"
      >
        <Trash2 size={20}/>
      </button>
    </div>
  );
};

export default Task;
