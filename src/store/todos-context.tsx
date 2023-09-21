import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[]; //items will be of type Todo array
    addTodo: (text: string) => void; //addTodo a function that returns nothing
    removeTodo: (id: string) => void; //removeTodo a function that returns nothing but takes and argumnet of type string
}

export const TodosContext = React.createContext<TodosContextObj>
  //createContext is of generic type therefor we create the type of this object by createContext<{define the type here}>
({
  //here is the concrete function definition in contrast with the above <TodosContextObj> where we define the type
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  //React.FC to make it clear that a functional component will be stored here
  const [todos, setTodos] = useState<Todo[]>([]); //initally an empty array due to useState([]) BUT if items are added to this array they have to be <Todo/> items that have the 'shape' of the defined todo object class created in models/todo;
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); //define the newTodo variable by instancing a new object from class Todo using the text receveing as a argument

    setTodos((prevTodos) => {

      return prevTodos.concat(newTodo) //update the state by concan
    });
  };

    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId)
      });
    };
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider
