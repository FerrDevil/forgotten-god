import { ITag } from "@/app/admin/tags/components/AdminTagsHandler/types"
import { Dispatch, SetStateAction } from "react"
import { IProductInfo } from "../CreateProductForm"

export interface IAddTagModal{
    isOpen: boolean
    setOpen : Dispatch<SetStateAction<boolean>>
    tags: ITag[]
    setProductsInfo: Dispatch<SetStateAction<IProductInfo>>
}