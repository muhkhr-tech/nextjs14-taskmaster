import { sql } from 'drizzle-orm';
import {
  bigint,
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import knex from 'knex';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  status: text('status').notNull()
})