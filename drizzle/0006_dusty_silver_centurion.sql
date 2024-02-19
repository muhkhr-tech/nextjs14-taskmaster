ALTER TABLE "projects" ADD COLUMN "total_todos" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "total_todos_inprogress" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "total_todos_completed" integer DEFAULT 0 NOT NULL;