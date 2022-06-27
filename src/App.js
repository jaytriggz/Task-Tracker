
import Header from './components/header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState(
    [
    {
        id: 1,
        text: 'Doctors Appointment',
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

 //Delete Task
 const deleteTask = (id) => {
  console.log('delete', id);
 }

  return (
    <div className='container'>
      <Header />
      <Tasks  tasks={tasks} onDelete= {deleteTask}/>
    </div>
  )
  
}



export default App;
