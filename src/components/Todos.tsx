import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import classes from './Todos.module.css';

//There is a different way to do it by using a 'Generic Type', a functional component out of the box can be turned into a generic function like the below.
//define the type of the function which is Function Component:
// const Todos: React.FC
// USE a generic type: const Todos: React.FC<{}>
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;

// React.FC<{items: string[]}> =====>>>>> this is how you define your own props in the functional component
