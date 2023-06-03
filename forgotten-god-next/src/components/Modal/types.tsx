import { Dispatch, SetStateAction } from "react";

export interface IModal{
    children: React.ReactNode,
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}