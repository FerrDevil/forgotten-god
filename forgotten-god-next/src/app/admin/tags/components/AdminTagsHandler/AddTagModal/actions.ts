"use server"

import prisma from "@/lib/prisma/prisma"
import { cache } from "react"

export const createTag = cache(async (name: string) => {
    const tag = await prisma.tag.create({
        data: {
            name: name
        }
    })
    return tag
})