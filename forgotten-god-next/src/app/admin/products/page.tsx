import { cache } from "react"
import AdminProductsHandler from "./components/AdminProductsHandler/AdminProductsHandler"
import { IProducts } from "./components/AdminProductsHandler/types"
import prisma from "@/lib/prisma/prisma"


const getProducts = cache(async () => {
    const products = await prisma.product.findMany()
    return products?.map(product => ({id: product.id, image: product.logo, title: product.title}))
})

export default async function AdminProductsPage  ()  {

    const products: IProducts[] = await getProducts()

    return(
        <AdminProductsHandler products={products}/>
    )
}