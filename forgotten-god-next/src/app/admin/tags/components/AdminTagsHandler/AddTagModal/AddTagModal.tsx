"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AdminDeleteProductsBody, AdminDeleteProductsCancelButton, AdminDeleteProductsCaution, AdminDeleteProductsHeader, AdminDeleteProductsProcedeButton, AdminDeleteProductsProcedeButtons, AdminDeleteProductsWrapper } from "./styles"
import { IAddTagModal } from "./types"
import InputField from "@/services/auth/components/InputField/InputField"

export default function AddTagModal({isOpen, setOpen, setTags} : IAddTagModal) {
    
    const [name, setName ] = useState("")

    const createTag = async () => {
        const refreshResponse = await fetch(`https://forgotten-god.onrender.com/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`https://forgotten-god.onrender.com/admin/createTag`, {method: "POST", credentials: "include", body: JSON.stringify({name : name})})
        if (response.ok){
            const tag = await response.json()
            setTags(prev => [...prev, tag])
            setOpen(false) 
        }
    }
    return(
        <Modal isOpen={isOpen} setOpen={setOpen}>
            <AdminDeleteProductsWrapper>
                <AdminDeleteProductsHeader>Предупреждение</AdminDeleteProductsHeader>
                <AdminDeleteProductsBody>
                    
                    <InputField
                        name={"tagName"}
                        placeholder="Название тэга"
                        onChange={(event) => {setName(event.target.value)}}
                    />
                    <AdminDeleteProductsProcedeButtons>
                        <AdminDeleteProductsProcedeButton onClick={createTag}>Создать</AdminDeleteProductsProcedeButton>
                        <AdminDeleteProductsCancelButton onClick={() => {setOpen(false)}}>Закрыть</AdminDeleteProductsCancelButton>
                    </AdminDeleteProductsProcedeButtons>
                </AdminDeleteProductsBody>
                
            </AdminDeleteProductsWrapper>
            
        </Modal>
    )
}