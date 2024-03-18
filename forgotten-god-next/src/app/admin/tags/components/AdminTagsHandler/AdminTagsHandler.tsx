"use client"

import { AdminCreateTagSVG, AdminProductsWrapper, AdminTagButton, AdminTagButtonDescription } from "./styles"
import { useState } from "react"
import AdminTags from "@/app/admin/tags/components/AdminTagsHandler/AdminTags/AdminTags"

import DeleteTagModal from "./DeleteTagsModal/DeleteTagModal"
import AddTagModal from "./AddTagModal/AddTagModal"


export default function AdminTagsHandler({tags} ) {
    const [tagsInfo, setTagsInfo] = useState(tags)

    const [deleteTagIndex, setDeleteTagIndex] = useState(-1)
    const [isAddTagOpen, setAddTagOpen] = useState(false)

    return (
        <AdminProductsWrapper>
            <AdminTagButton onClick={() => {setAddTagOpen(true)}}>
                <AdminCreateTagSVG/>
                <AdminTagButtonDescription>Добавить тэг</AdminTagButtonDescription>
            </AdminTagButton>
           <AdminTags setDeleteTagIndex={setDeleteTagIndex} tags={tagsInfo}/>
           <AddTagModal isOpen={isAddTagOpen} setOpen={setAddTagOpen} setTags={setTagsInfo}/>
           <DeleteTagModal tags={tagsInfo} setTags={setTagsInfo} tagIndex={deleteTagIndex} setTagIndex={setDeleteTagIndex}/>
        </AdminProductsWrapper>
       
    )
}