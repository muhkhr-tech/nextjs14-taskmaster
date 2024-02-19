'use server'

import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function GetProjects() {
  const data = await db.select().from(projects).orderBy(desc(projects.createdAt))
  return data
}