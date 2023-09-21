import { useRef } from "react";

import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null); //a default value has to be set as this element might be assigned to another element that TS doesn't know //HTMLInputElement because Since every <input> element, regardless of type, is based on the HTMLInputElement interface ===>>> check MDM

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value // '?' signals to TS that should try to access value and if that value is NOT undefined store the value in 'enteredText' otherwise store null
        //if you are 100% that the todoTextInputRef.current cannot be null, in this example this is the case because we are storing the vale after the submit button, but TS doesn't know that, you can use '!' instead of '?' because you are sure that the submitHandler can't be called before the connection is established and value read aka I'm certain that the value cannot be null (because that's how I made my code work) therefore drill into this object, into this property and give me the actual stored non NULL value.

        if(enteredText.trim().length === 0) { //this is not related to if the ref is connected or not
            //throw an error
            return;
        }
        props.onAddTodo(enteredText); //we point this function as we got it from App.tsx
    };

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo </button>
    </form>
}
export default NewTodo;