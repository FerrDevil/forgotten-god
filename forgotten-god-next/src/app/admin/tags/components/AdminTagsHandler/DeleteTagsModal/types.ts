import { Dispatch, SetStateAction } from "react"
import { ITag } from "../types"

export interface IDeleteTagModal{
    tagIndex: number
    setTagIndex: Dispatch<SetStateAction<number>>
    tags: ITag[]
    setTags: Dispatch<SetStateAction<ITag[]>>
}