import { Dispatch, SetStateAction } from "react"
import { IProductInfo } from "../CreateProductForm"

export type ISliderParams = {
    pageIndex: number,
    selectedMediaIndex: number
}

export type ImageSliderProps = {
    elements: File[],
    setElements: Dispatch<SetStateAction<File[]>>
    sliderParams : ISliderParams
    setSliderParams : Dispatch<SetStateAction<ISliderParams>>,
    setProductInfo:  Dispatch<SetStateAction<IProductInfo>>
}