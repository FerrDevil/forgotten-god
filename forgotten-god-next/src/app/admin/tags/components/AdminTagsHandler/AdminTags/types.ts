import { TTag } from "@/types/store/types";
import { Dispatch, SetStateAction } from "react";


export interface IAdminTags{
    tags: TTag[],
    setDeleteTagIndex: Dispatch<SetStateAction<number>>
}

export interface IAdminTag{
    tag: TTag,
    tagIndex: number,
    setDeleteTagIndex: Dispatch<SetStateAction<number>>
}