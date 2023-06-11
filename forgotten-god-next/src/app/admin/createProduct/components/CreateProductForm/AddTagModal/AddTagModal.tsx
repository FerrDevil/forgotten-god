"use client"

import Modal from "@/components/Modal/Modal"
import { AdminDeleteProductsBody, AdminDeleteProductsHeader, AdminDeleteProductsWrapper, ProductFormGameTagsContainer, ProductFormGameTagName, ProductFormGameTagWrapper } from "./styles"
import { IAddTagModal } from "./types"

export default function AddTagModal({isOpen, setOpen, tags, setProductsInfo} : IAddTagModal) {
    

    const addTagToProduct = (event : React.MouseEvent<HTMLButtonElement>, tagId: number) => {
        setProductsInfo(prev => ({...prev, tags: [...prev.tags, tags.find(tag => tag.id === tagId)]}))
    }
    return(
        <Modal isOpen={isOpen} setOpen={setOpen}>
            <AdminDeleteProductsWrapper>
                <AdminDeleteProductsHeader>Выберите тэги</AdminDeleteProductsHeader>
                <AdminDeleteProductsBody>
                    <ProductFormGameTagsContainer>
                        {
                            tags.map(tag => (
                                <ProductFormGameTagWrapper key={tag.id}  onClick={(event : React.MouseEvent<HTMLButtonElement>) => {addTagToProduct(event, tag.id)}}>
                                    <ProductFormGameTagName>{tag.name}</ProductFormGameTagName>
                                </ProductFormGameTagWrapper>
                            ))
                        }
                    </ProductFormGameTagsContainer>
                </AdminDeleteProductsBody>
            </AdminDeleteProductsWrapper>
            
        </Modal>
    )
}