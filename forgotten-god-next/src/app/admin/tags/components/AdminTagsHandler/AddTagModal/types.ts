import { TTag } from "@/types/store/types"
import { Dispatch, SetStateAction } from "react"


export interface IAddTagModal{
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>

    setTags: Dispatch<SetStateAction<TTag[]>>
}