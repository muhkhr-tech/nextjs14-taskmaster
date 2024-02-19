'use server'

import { db } from "@/db";
import { projects } from "@/db/schema";

export default async function GetProjects() {
  const data = await db.select().from(projects)
  return data
}