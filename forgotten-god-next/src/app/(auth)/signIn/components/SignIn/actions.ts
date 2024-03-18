"use server"

import { redirect } from "next/navigation"

export async function redirectTo(link:string) {
   redirect(link) 
}