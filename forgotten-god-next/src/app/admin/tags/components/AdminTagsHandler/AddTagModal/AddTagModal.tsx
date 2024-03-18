"use client"

import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
import { AdminDeleteProductsBody, AdminDeleteProductsCancelButton, AdminDeleteProductsCaution, AdminDeleteProductsHeader, AdminDeleteProductsProcedeButton, AdminDeleteProductsProcedeButtons, AdminDeleteProductsWrapper } from "./styles"
import { IAddTagModal } from "./types"
import InputField from "@/services/auth/components/InputField/InputField"
import { createTag } from "./actions"

export default function AddTagModal({isOpen, setOpen, setTags} : IAddTagModal) {
    
    const [name, setName ] = useState("")
    const createTagByName = createTag.bind(null, name)

    const createNewTag = async () => {
        try{
            const tag = await createTagByName()
            if (tag){
                setTags(prev => [...prev, tag])
                setName("")
            }
        }
        catch(error){
            console.error(error)
        }
        
        setOpen(false) 
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
                        <AdminDeleteProductsProcedeButton onClick={createNewTag}>Создать</AdminDeleteProductsProcedeButton>
                        <AdminDeleteProductsCancelButton onClick={() => {setOpen(false)}}>Закрыть</AdminDeleteProductsCancelButton>
                    </AdminDeleteProductsProcedeButtons>
                </AdminDeleteProductsBody>
                
            </AdminDeleteProductsWrapper>
            
        </Modal>
    )
}