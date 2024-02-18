CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"status" text NOT NULL,
	"created_at" integer DEFAULT 1708185600000
);
