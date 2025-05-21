import {Plus} from "lucide-react";
import {motion} from "motion/react";
import type {FC, FormEvent} from "react";

interface AddTaskProps {
  newTask: string;
  setNewTask: (str: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AddTask: FC<AddTaskProps> = ({newTask, setNewTask, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="w-full mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <motion.button
          type="submit"
          className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
          initial={{scale: 1, rotateX: 0}}
          animate={{rotateY: 180}}
          style={{transformStyle: "preserve-3d"}} // Enable 3D effects
        >
          <Plus size={24}/>
        </motion.button>

      </div>
    </form>
  );
};

export default AddTask;
