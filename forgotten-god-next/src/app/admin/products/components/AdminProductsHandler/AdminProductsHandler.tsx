"use client"

import Modal from "@/components/Modal/Modal"
import { AdminProductsWrapper } from "./styles"
import { useEffect, useState } from "react"
import AdminProducts from "@/app/admin/products/components/AdminProductsHandler/AdminProducts/AdminProducts"
import { IProducts } from "./types"
import DeleteProductModal from "./DeleteProductModal/DeleteProductModal"

export default function AdminProductsHandler({products} : {products: IProducts[]}) {
    const [productsInfo, setProductsInfo] = useState([])

    const [deleteProductIndex, setDeleteProductIndex] = useState(-1)

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/admin/getProducts`)
            setProductsInfo(await response.json())
        }
        getProducts()
    }, [])

    return (
        <AdminProductsWrapper>
           <AdminProducts setDeleteProductIndex={setDeleteProductIndex} products={productsInfo}/>
           <DeleteProductModal products={productsInfo} setProducts={setProductsInfo} productIndex={deleteProductIndex} setProductIndex={setDeleteProductIndex}/>
        </AdminProductsWrapper>
       
    )
}