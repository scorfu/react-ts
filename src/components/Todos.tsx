import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import classes from './Todos.module.css';

//There is a different way to do it by using a 'Generic Type', a functional component out of the box can be turned into a generic function like the below.
//define the type of the function which is Function Component:
// const Todos: React.FC
// USE a generic type: const Todos: React.FC<{}>
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} ></TodoItem> //bind onRemoveTodo to preconfigure the function with the expected "this" and argumnets: "this" will be set to null because we don't care about the "this" but set the ID to "item.id"
      ))}
    </ul>
  );
};

export default Todos;

// React.FC<{items: string[]}> =====>>>>> this is how you define your own props in the functional component
