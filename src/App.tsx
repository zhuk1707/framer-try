import {useState} from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import {ListTodo} from "lucide-react";

const App = () => {
  const [tasks, setTasks] = useState([
    {id: crypto.randomUUID(), text: "Learn React"},
    {id: crypto.randomUUID(), text: "Build a Task Tracker"},
    {id: crypto.randomUUID(), text: "Add Tasks"},
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setTasks([...tasks, {id: crypto.randomUUID(), text: newTask.trim()}]);
    setNewTask("");
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          <ListTodo className='mr-2' size={42}/> Task Tracker
        </h1>
        <AddTask newTask={newTask} setNewTask={setNewTask} onSubmit={handleAddTask}/>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No tasks yet. Add one above!</p>
        ) : (
          <TaskList tasks={tasks} onDelete={handleDelete}/>
        )}
      </div>
    </div>
  );
};

export default App;
