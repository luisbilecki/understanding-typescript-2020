import { RequestHandler } from 'express';

import { Todo } from '../models/todo';
import { generateRandomId } from '../utils/id';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(generateRandomId(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};
