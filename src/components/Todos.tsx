import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

//There is a different way to do it by using a 'Generic Type', a functional component out of the box can be turned into a generic function like the below.
//define the type of the function which is Function Component:
// const Todos: React.FC
// USE a generic type: const Todos: React.FC<{}>
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        ></TodoItem> //bind onRemoveTodo to prec onfigure the function with the expected "this" and argumnets: "this" will be set to null because we don't care about the "this" but set the ID to "item.id"
      ))}
    </ul>
  );
};

export default Todos;

// React.FC<{items: string[]}> =====>>>>> this is how you define your own props in the functional component
