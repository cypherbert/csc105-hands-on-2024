import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const completeTodo = async (c: Context) => {
    try {
      const id = c.req.param("id");
      if (!id) {
        return c.json(
          { success: false, data: null, msg: "Missing todo ID" },
          400
        );
      }
  
      const updated = await todoModel.markComplete(parseInt(id));
      return c.json({
        success: true,
        data: updated,
        msg: "Todo marked as complete",
      });
    } catch (e) {
      return c.json({ success: false, data: null, msg: `${e}` }, 500);
    }
  };
  
const updateTodoTitle = async (c: Context) => {
    try {
      const todoId = c.req.param("id");
      const body = await c.req.json();
  
      if (!body.title) {
        return c.json(
          {
            success: false,
            data: null,
            msg: "Missing title in the request body",
          },
          400
        );
      }
  
      const updatedTodo = await todoModel.updateTitle(todoId, body.title);
  
      return c.json({
        success: true,
        data: updatedTodo,
        msg: "Todo title updated successfully!",
      });
    } catch (e) {
      return c.json(
        {
          success: false,
          data: null,
          msg: `${e}`,
        },
        500
      );
    }
};
  
const getUserTodos = async (c: Context) => {
    try {
      const userId = c.req.param("id");
  
      if (!userId) {
        return c.json(
          { success: false, data: null, msg: "Missing user ID" },
          400
        );
      }
  
      const todos = await todoModel.getTodosByUser(parseInt(userId));
  
      return c.json({
        success: true,
        data: todos,
        msg: "Fetched user's todos successfully",
      });
    } catch (e) {
      return c.json({ success: false, data: null, msg: `${e}` }, 500);
    }
};
export { createTodo, getTodo, completeTodo, updateTodoTitle, getUserTodos };
  