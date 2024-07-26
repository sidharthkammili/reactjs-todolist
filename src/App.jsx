import {useState, useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

//persist function to keep data when page is refreshed
function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({todos:newList}))
}

//updates list after user makes changes
function handleAddTodos(newTodo){
  const newTodoList = [...todos,newTodo]
  persistData(newTodoList)
  setTodos(newTodoList) 
}

//delete logic
function handleDeleteTodo(index) {
  const newTodoList = todos.filter((todo,todoIndex) => {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

//edit logic
function handleEditTodo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}

//useEffect 
useEffect(() => {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)

},[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
