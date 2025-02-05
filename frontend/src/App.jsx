import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './componenets/CreateTodo'
import { Todo } from './componenets/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <CreateTodo></CreateTodo>
      <Todo todos={[
        {
          title : "abcd",
          description: "jdjfksd",
          completed:false
        }
       ]}> </Todo>
     </div>
     
  )
}

export default App
