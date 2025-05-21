import {GripVertical, Trash2} from 'lucide-react';
import {motion, Reorder, useDragControls} from 'motion/react';
import type {FC} from "react";

export interface TaskType {
  id: string; // Ensure id is a string throughout the project
  text: string;
}

interface TaskProps {
  task: TaskType;
  onDelete: (id: string) => void;
}

const Task: FC<TaskProps> = ({task, onDelete}) => {
  const controls = useDragControls();

  if (!task) return null;
  const taskText = task.text || 'Untitled Task';

  return (
    <Reorder.Item
      value={task}
      dragListener={false}
      dragControls={controls}
      className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100 w-full"
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      whileHover={{border: '1px solid #97998b'}}
      layout
    >
      <motion.button
        className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => controls.start(e)}
        whileHover={{scale: 1.4}}
      >
        <GripVertical size={20}/>
      </motion.button>

      <span className="flex-1 text-gray-700">{taskText}</span>

      <motion.button
        onClick={() => onDelete(task.id)}
        className="p-1 rounded hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors"
        whileHover={{scale: 1.4}}
        whileTap={{scale: 1.2}}
        transition={{duration: .5}}
      >
        <Trash2 size={20}/>
      </motion.button>
    </Reorder.Item>
  );
};

export default Task;
