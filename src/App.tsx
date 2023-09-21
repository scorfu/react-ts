import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); //initally an empty array due to useState([]) BUT if items are added to this array they have to be <Todo/> items that have the 'shape' of the defined todo object class created in models/todo;
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); //define the newTodo variable by instancing a new object from class Todo using the text receveing as a argument

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo) //update the state by concan
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
