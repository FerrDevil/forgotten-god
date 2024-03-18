import { Dispatch, SetStateAction } from "react"

export interface AddTagModalProps{

    tags: {id: number, name: string}[]
    addedTagsState: [number[], Dispatch<SetStateAction<number[]>>]
}