import {useState} from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import {ListTodo} from "lucide-react";
import {domAnimation, LayoutGroup, LazyMotion, m, MotionConfig} from "motion/react";
import type {TaskType} from "./components/Task.tsx";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {id: crypto.randomUUID(), text: "Learn React"},
    {id: crypto.randomUUID(), text: "Build a Task Tracker"},
    {id: crypto.randomUUID(), text: "Add Tasks"},
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    setTasks([{id: crypto.randomUUID(), text: newTaskText.trim()}, ...tasks]);
    setNewTaskText('');
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleReorder = (newTasks: TaskType[]) => {
    setTasks([...newTasks]);
  };

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        transition={{duration: 0.2}}
        reducedMotion="user"
      >
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <LayoutGroup>
              <m.h1
                className="text-3xl font-bold text-gray-900 mb-6 flex items-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
              >
                <ListTodo className='mr-2' size={42}/> Task Tracker
              </m.h1>
              <AddTask newTask={newTaskText} setNewTask={setNewTaskText} onSubmit={handleAddTask}/>
              {tasks.length === 0 ? (
                <m.p
                  className="text-center text-gray-500 py-8"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                >No tasks yet. Add one above!</m.p>
              ) : (
                <TaskList
                  tasks={tasks}
                  setTasks={handleReorder}
                  onDelete={handleDelete}
                />
              )}
            </LayoutGroup>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
