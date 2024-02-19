CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"status" text NOT NULL,
	"due_date" date NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "projects_title_unique" UNIQUE("title")
);
--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "project_id" integer;