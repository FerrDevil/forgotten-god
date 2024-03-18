"use client"
import { useState } from "react"
import { ProductFormGameTagDeleteButton, ProductFormGameTagName, ProductFormGameTagWrapper, ProductFormGameTagsContainer, ProductFormGameTagsDeleteButtonSVG, ProductFormGameTagsHeader, ProductFormGameTagsWrapper } from "../styles"
import AddTagModal from "./AddTagModal/AddTagModal"

export default function Tags({tags=[]}) {
    const [addedTags, setAddedTags]= useState([])
    return (
        <ProductFormGameTagsWrapper>
            <ProductFormGameTagsHeader>Тэги</ProductFormGameTagsHeader>
            <input name="tags" value={JSON.stringify(addedTags)} readOnly hidden/>
            <ProductFormGameTagsContainer>
                {addedTags.map(tagId => (tags.find((tag) => tag.id === tagId))).map((tag) => (
                    <ProductFormGameTagWrapper href={""} key={tag.id}>
                        <ProductFormGameTagName>{tag.name}</ProductFormGameTagName>
                        <ProductFormGameTagDeleteButton onClick={
                            (event: React.MouseEvent<HTMLButtonElement> ) => {
                                setAddedTags(prev => ([...prev, prev.filter((curTag) => curTag.id !== tag.id)]))
                            }
                        }>
                            <ProductFormGameTagsDeleteButtonSVG/>
                        </ProductFormGameTagDeleteButton >
                    </ProductFormGameTagWrapper>
                ))}
            
            </ProductFormGameTagsContainer>

            <AddTagModal tags={tags} addedTagsState={[addedTags, setAddedTags]}/>
        </ProductFormGameTagsWrapper>
  )
}
