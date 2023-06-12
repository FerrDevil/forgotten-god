"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AdminDeleteProductsBody, AdminDeleteProductsCancelButton, AdminDeleteProductsCaution, AdminDeleteProductsHeader, AdminDeleteProductsProcedeButton, AdminDeleteProductsProcedeButtons, AdminDeleteProductsWrapper } from "./styles"

export default function DeleteProductModal({productIndex, setProductIndex, products, setProducts}) {
    const [modalIsOpen, modalSetOpen] = useState(false) 
    
    useEffect(() => {
        modalSetOpen( productIndex >= 0 )
    }, [productIndex])

    useEffect(() => {
        if(!modalIsOpen){
            setProductIndex(-1) 
        }
    }, [modalIsOpen])


    const deleteProduct = async () => {
        const refreshResponse = await fetch(`https://forgotten-god.onrender.com/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`https://forgotten-god.onrender.com/admin/deleteGame/${products[productIndex].id}`, {method: "DELETE", credentials: "include"})
        if (response.ok){
            setProducts(prev => prev.filter((_, index) => index !== productIndex))
            setProductIndex(-1) 
        }
    }
    return(
        <Modal isOpen={modalIsOpen} setOpen={modalSetOpen}>
            <AdminDeleteProductsWrapper>
                <AdminDeleteProductsHeader>Предупреждение</AdminDeleteProductsHeader>
                <AdminDeleteProductsBody>
                    <AdminDeleteProductsCaution>Вы действительно хотите удалить данный продукт?</AdminDeleteProductsCaution>
                    <AdminDeleteProductsProcedeButtons>
                        <AdminDeleteProductsProcedeButton onClick={deleteProduct}>Продолжить</AdminDeleteProductsProcedeButton>
                        <AdminDeleteProductsCancelButton onClick={() => {modalSetOpen(false)}}>Закрыть</AdminDeleteProductsCancelButton>
                    </AdminDeleteProductsProcedeButtons>
                </AdminDeleteProductsBody>
                
            </AdminDeleteProductsWrapper>
            
        </Modal>
    )
}