import { Dispatch, SetStateAction } from "react";
import { ITag } from "../types";

export interface IAdminTags{
    tags: ITag[],
    setDeleteTagIndex: Dispatch<SetStateAction<number>>
}

export interface IAdminTag{
    tag: ITag,
    tagIndex: number,
    setDeleteTagIndex: Dispatch<SetStateAction<number>>
}