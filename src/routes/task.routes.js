import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  completeTask,
  deleteTask,
} from "../controllers/task.controller.js";

import {
  getTaskSchema,
  createTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
} from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, validateSchema(getTaskSchema), getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);

router.put(
  "/tasks/:id",
  authRequired,
  validateSchema(updateTaskSchema),
  updateTask
);

router.patch(
  "/tasks/:id",
  authRequired,
  validateSchema(updateTaskSchema),
  completeTask
);

router.delete(
  "/tasks/:id",
  authRequired,
  validateSchema(deleteTaskSchema),
  deleteTask
);

export default router;
