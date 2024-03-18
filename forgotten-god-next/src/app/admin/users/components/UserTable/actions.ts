"use server"

import prisma from "@/lib/prisma/prisma"

export default async function promoteToAdmin(id: string){
    const user = await prisma.user.update({
        where: {
            id: id
        },
        data:{
            role: "admin"
        }
    })
    return user 

}