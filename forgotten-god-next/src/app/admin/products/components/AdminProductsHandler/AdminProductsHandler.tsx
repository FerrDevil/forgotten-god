"use client"

import Modal from "@/components/Modal/Modal"
import { AdminProductsWrapper } from "./styles"
import { useState } from "react"
import AdminProducts from "@/app/admin/products/components/AdminProductsHandler/AdminProducts/AdminProducts"
import { IProducts } from "./types"
import DeleteProductModal from "./DeleteProductModal/DeleteProductModal"

export default function AdminProductsHandler({products} : {products: IProducts[]}) {
    const [productsInfo, setProductsInfo] = useState(products)

    const [deleteProductIndex, setDeleteProductIndex] = useState(-1)

    return (
        <AdminProductsWrapper>
           <AdminProducts setDeleteProductIndex={setDeleteProductIndex} products={productsInfo}/>
           <DeleteProductModal products={productsInfo} setProducts={setProductsInfo} productIndex={deleteProductIndex} setProductIndex={setDeleteProductIndex}/>
        </AdminProductsWrapper>
       
    )
}