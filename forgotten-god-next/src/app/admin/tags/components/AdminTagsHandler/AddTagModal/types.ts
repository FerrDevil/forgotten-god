import { Dispatch, SetStateAction } from "react"
import { ITag } from "../types"

export interface IAddTagModal{
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>

    setTags: Dispatch<SetStateAction<ITag[]>>
}