"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AdminDeleteProductsBody, AdminDeleteProductsCancelButton, AdminDeleteProductsCaution, AdminDeleteProductsHeader, AdminDeleteProductsProcedeButton, AdminDeleteProductsProcedeButtons, AdminDeleteProductsWrapper } from "./styles"
import { IDeleteTagModal } from "./types"

export default function DeleteTagModal({tagIndex, setTagIndex, tags, setTags} : IDeleteTagModal) {
    const [modalIsOpen, modalSetOpen] = useState(false) 
    
    useEffect(() => {
        modalSetOpen( tagIndex >= 0 )
    }, [tagIndex])

    useEffect(() => {
        if(!modalIsOpen){
            setTagIndex(-1) 
        }
    }, [modalIsOpen])


    const deleteProduct = async () => {
        const refreshResponse = await fetch(`http://localhost:5000/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`http://localhost:5000/admin/deleteTag/${tags[tagIndex].id}`, {method: "DELETE", credentials: "include"})
        if (response.ok){
            setTags(prev => prev.filter((_, index) => index !== tagIndex))
            setTagIndex(-1) 
        }
    }
    return(
        <Modal isOpen={modalIsOpen} setOpen={modalSetOpen}>
            <AdminDeleteProductsWrapper>
                <AdminDeleteProductsHeader>Предупреждение</AdminDeleteProductsHeader>
                <AdminDeleteProductsBody>
                    <AdminDeleteProductsCaution>Вы действительно хотите удалить данный тэг?</AdminDeleteProductsCaution>
                    <AdminDeleteProductsProcedeButtons>
                        <AdminDeleteProductsProcedeButton onClick={deleteProduct}>Продолжить</AdminDeleteProductsProcedeButton>
                        <AdminDeleteProductsCancelButton onClick={() => {modalSetOpen(false)}}>Закрыть</AdminDeleteProductsCancelButton>
                    </AdminDeleteProductsProcedeButtons>
                </AdminDeleteProductsBody>
                
            </AdminDeleteProductsWrapper>
            
        </Modal>
    )
}