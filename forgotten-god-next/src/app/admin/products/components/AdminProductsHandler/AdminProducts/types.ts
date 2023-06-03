import { Dispatch, SetStateAction } from "react";
import { IProducts } from "../types";

export interface IAdminProducts{
    products: IProducts[],
    setDeleteProductIndex: Dispatch<SetStateAction<number>>
}

export interface IAdminProduct{
    product: IProducts,
    productIndex: number,
    setDeleteProductIndex: Dispatch<SetStateAction<number>>
}