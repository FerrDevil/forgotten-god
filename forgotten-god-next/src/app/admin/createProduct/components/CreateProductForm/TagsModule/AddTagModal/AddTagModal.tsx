"use client"

import Modal from "@/components/Modal/Modal"
import { AdminDeleteProductsBody, AdminDeleteProductsHeader, AdminDeleteProductsWrapper, ProductFormGameTagsContainer, ProductFormGameTagName, ProductFormGameTagWrapper, ProductFormGameTagsAddButton, ProductFormGameTagsAddButtonSVG } from "./styles"
import { AddTagModalProps } from "./types"
import { useState } from "react"

export default function AddTagModal({ tags, addedTagsState} : AddTagModalProps) {
    const [addedTags, setAddedTags] = addedTagsState
    const [isModalOpened, setModalOpened] = useState(false)

    const addTagToProduct = (event : React.MouseEvent<HTMLButtonElement>, tagId: number) => {
        if(addedTags.includes(tagId)) return
        setAddedTags(prev => [...prev, tagId])
    }


    const openTagsModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setModalOpened(true)
    }
    return(

        <>
            <ProductFormGameTagsAddButton onClick={openTagsModal}><ProductFormGameTagsAddButtonSVG/></ProductFormGameTagsAddButton>
            <Modal isOpen={isModalOpened} setOpen={setModalOpened}>
                <AdminDeleteProductsWrapper>
                    <AdminDeleteProductsHeader>Выберите тэги</AdminDeleteProductsHeader>
                    <AdminDeleteProductsBody>
                        
                        <ProductFormGameTagsContainer>
                            {
                                tags.map(tag => (
                                    <ProductFormGameTagWrapper key={tag.id}  onClick={(event : React.MouseEvent<HTMLButtonElement>) => {
                                        event.preventDefault()
                                        addTagToProduct(event, tag.id)
                                        }}>
                                        <ProductFormGameTagName>{tag.name}</ProductFormGameTagName>
                                    </ProductFormGameTagWrapper>
                                ))
                            }
                        </ProductFormGameTagsContainer>
                    </AdminDeleteProductsBody>
                </AdminDeleteProductsWrapper>
                
            </Modal>
        </>
    )
}