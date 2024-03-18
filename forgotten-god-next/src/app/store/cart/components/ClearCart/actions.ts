"use server"

import prisma from "@/lib/prisma/prisma"
import { auth } from "@/utils/userAuth/auth"
import { revalidatePath } from "next/cache"

export async function clearUserCart() {
    const userInfo = (await auth()).user

    const cartDeletion = await prisma.cart.deleteMany({
        where: {
            userId: userInfo.id
        }
    }) 
    if (!cartDeletion) return
    else{
        revalidatePath("/store/cart")
    }
}