"use server"

import prisma from "@/lib/prisma/prisma"
import { auth } from "@/utils/userAuth/auth"
import { revalidatePath } from "next/cache"

export async function deleteCartItem(id:number) {
    const userId = (await auth()).user.id
    try{
        const itemDeletion = await prisma.cart.delete({
            where: {
                userId_productId:{
                    productId: id,
                    userId: userId
                }
            }
        })
        if (itemDeletion){
            return null
        }
    }
    catch(error){
        return {error: error}
    }
}

export async function revalidateStore() {
    revalidatePath("/store")
}