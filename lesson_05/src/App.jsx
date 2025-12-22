

import './App.css'
import TaskManager from './components/TasksManager/TaskManager'
import PostsManager from './components/Posts/PostsManager'
import { tasksList, workersList } from "./data/6_tasks_devider"
import { postsList } from './data/5_posts'
function App() {


  return (
    <>
      <TaskManager
        tasksList={tasksList}
        usersList={workersList}
      />
      <PostsManager
        postsList={postsList}
      />
    </>
  )
}

export default App
