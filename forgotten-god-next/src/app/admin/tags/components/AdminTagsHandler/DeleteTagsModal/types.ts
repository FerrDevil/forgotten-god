import { TTag } from "@/types/store/types"
import { Dispatch, SetStateAction } from "react"


export interface IDeleteTagModal{
    tagIndex: number
    setTagIndex: Dispatch<SetStateAction<number>>
    tags: TTag[]
    setTags: Dispatch<SetStateAction<TTag[]>>
}