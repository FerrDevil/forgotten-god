"use server"

import prisma from "@/lib/prisma/prisma"
import { auth } from "@/utils/userAuth/auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addToCart(productId: number, shouldRedirect: boolean) {
    const userId = (await auth())?.user?.id
    if (userId){
        const existingCartItem = await prisma.cart.findFirst({
            where: {
                productId: productId,
                userId: userId
            }
        })
        if (!existingCartItem){
            const cartItem = await prisma.cart.create({
                data: {
                    productId: productId,
                    userId: userId
                }
            })
        }

        
       
    }
    
    revalidatePath("/store/product/")
    if (shouldRedirect){
        revalidatePath("/store/cart/")
        redirect("/store/cart/")
    }
}