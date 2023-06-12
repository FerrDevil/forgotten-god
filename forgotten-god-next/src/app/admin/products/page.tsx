import AdminProductsHandler from "./components/AdminProductsHandler/AdminProductsHandler"
import { IProducts } from "./components/AdminProductsHandler/types"

async function getProducts() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/admin/getProducts`)
    return await response.json()
}

export default async function AdminProductsPage  ()  {

    const products: IProducts[] = await getProducts()

    return(
        <AdminProductsHandler products={products}/>
    )
}