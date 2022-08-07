
import Header from './components/header'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import {useState} from 'react'
import AddTask from './components/AddTask'
import Section from './components/Section'


const App = () => {
  const [tasks, setTasks] = useState(
    [
    {
        id: 1,
        text: 'Tech Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Class at SAIL(IKD)',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'NAN Assignments',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]
 )
  //Add Task
  const addTask = (task) => {
    console.log(task);
  }

 //Delete Task
 const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== 
  id))
 }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,
       reminder: !task.reminder } : task)
    )
  }
  return (
    <div className='container'>
      <Header />
      <AddTask  onAdd={addTask}/>
      {tasks.length > 0 ? 
      <Tasks  tasks={tasks} 
      onDelete= {deleteTask} 
      onToggle={toggleReminder}/> : ('Oga No Task To Show, OTTN')}
      <Footer />
      <Section />
    </div>
  )
  
}



export default App;
