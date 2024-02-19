import { relations, sql } from 'drizzle-orm';
import {
  bigint,
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull().unique(),
  status: text('status'),
  description: text('description'),
  dueDate: date('due_date').notNull(),
  createdAt: timestamp('created_at').defaultNow()
})

export const projectssRelations = relations(projects, ({ many }) => ({
  todos: many(todos),
}));

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  status: text('status').notNull(),
  projectId: integer('project_id')
})

export const todosRelations = relations(todos, ({ one }) => ({
  author: one(projects, {
    fields: [todos.projectId],
    references: [projects.id],
  }),
}));