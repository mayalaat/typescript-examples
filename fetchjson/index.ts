import axios from 'axios';

const url : string = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(result => {
    const todo = result.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    It is finished? ${completed}
    `);
})