import {
    bigint,
    boolean,
    date,
    integer,
    pgTable,
    primaryKey,
    serial,
    text,
    timestamp,
    uniqueIndex,
  } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    status: text('status').notNull(),
    createdAt: integer('created_at').default(new Date().setHours(0, 0, 0, 0))
})