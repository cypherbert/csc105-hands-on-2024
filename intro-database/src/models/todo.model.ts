import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

const getAllTodos = async () => {
    const todos = await db.todo.findMany({
        include: {
            user: true, 
        },
    });
    return todos;
}
const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;                                
};   
const getAllUsers = async () => {
    const users = await db.user.findMany();
    return users;
};   
const completeTodo = async (id: number) => {
    const updatedTodo = await db.todo.update({
      where: { id },
      data: { completed: true },
    });
    return updatedTodo;
  };
  
const updateTitle = async (id: string, newTitle: string) => {
    const updatedTodo = await db.todo.update({
      where: { id: parseInt(id) },
      data: { title: newTitle },
    });
    return updatedTodo;
};
  
const getTodosByUser = async (userId: number) => {
    const todos = await db.todo.findMany({
      where: { userId },
    });
    return todos;
};
  

export { createTodo, getTodo, getAllTodos, deleteTodo, getAllUsers ,completeTodo};

