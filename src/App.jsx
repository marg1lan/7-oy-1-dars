import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, removeTodo } from './features/counterSlice';

function App() {

  const [text, setText] = useState("")

  const { todos } = useSelector((store) => store.todos)
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addTodo({
      id: uuidv4(),
      text,
    }))
    setText('')
  }
  return (

    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="todo-list">
            <div className="forma">
              <div className="input">
                <input onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter todo list' value={text} />
              </div>
              <div className="ook">
                <button>Submit</button>
              </div>
            </div>
            <div className="information">
              {todos.map((todo) => (
                <div className="info" key={todos.id}>
                  <div className="text">
                    <h1>{todo.text}</h1>
                  </div>
                  <div className="amallar">
                <button onClick={()=> dispatch(removeTodo(todo.id))}>Delete</button>
              </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
