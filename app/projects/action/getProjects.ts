'use server'

import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export default async function GetProjects(status: any) {
  let data = []
  
  if (status === '') {
    data = await db.select().from(projects).orderBy(desc(projects.createdAt))
  } else {
    data = await db.select().from(projects).where(eq(projects.status, status)).orderBy(desc(projects.createdAt))
  }
  
  return data
}