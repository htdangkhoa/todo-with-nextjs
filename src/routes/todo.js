import { Router } from 'express';
import Todo from '../models/todo.model';

const router = Router();

router.get('/todos', async (req, res) => {
  const todos = await Todo.find();

  try {
    return res.json({
      ...global.form,
      code: 1,
      payload: todos,
    });
  } catch (error) {
    return res.json({
      ...global.form,
      error,
    });
  }
});

router.post('/todo', async (req, res) => {
  const { content } = req.body;

  const todo = new Todo({ content });

  try {
    const result = await todo.save();

    return res.json({
      ...global.form,
      code: 1,
      payload: result,
    });
  } catch (error) {
    return res.json({
      ...global.form,
      error,
    });
  }
});

router.patch('/todo', async (req, res) => {
  const { id, isDone } = req.body;

  const todo = await Todo.findOne({
    _id: id,
  });

  if (!todo) {
    return res.json({
      ...global.form,
      error: 'The todo does not exits.',
    });
  }

  todo.isDone = isDone;

  try {
    await todo.save();

    return res.json({
      ...global.form,
      code: 1,
      payload: todo,
    });
  } catch (error) {
    return res.json({
      ...global.form,
      error,
    });
  }
});

export default router;
