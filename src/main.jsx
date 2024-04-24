import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ContadorApp } from './Accountant/ContadorApp'
import { TaskList } from './taskList/TaskList'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContadorApp value = {0} /> */}
    <TaskList />
  </React.StrictMode>,
)
