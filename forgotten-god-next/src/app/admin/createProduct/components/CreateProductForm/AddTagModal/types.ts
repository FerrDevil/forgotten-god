import { TTag } from "@/types/store/types"
import { Dispatch, SetStateAction } from "react"
import { IProductInfo } from "../CreateProductForm"

export interface IAddTagModal{
    isOpen: boolean
    setOpen : Dispatch<SetStateAction<boolean>>
    tags: TTag[]
    setProductsInfo: Dispatch<SetStateAction<IProductInfo>>
}