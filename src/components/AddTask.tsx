import { Plus } from "lucide-react";
import type { FC } from "react";

interface AddTaskProps {
  newTask: string;
  setNewTask: (str: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddTask: FC<AddTaskProps> = ({ newTask, setNewTask, onSubmit }) => {
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
        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
          <Plus size={24} />
        </button>
      </div>
    </form>
  );
};

export default AddTask;
