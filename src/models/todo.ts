class Todo { //can be type or interface instead of class
    id: string; //in JS you don't need to define the type ahead of time like on this line
    text: string; //in JS you don't need to define the type ahead of time like on this line

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
} 

export default Todo;