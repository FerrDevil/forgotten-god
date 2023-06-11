import { Dispatch, SetStateAction } from "react"
import { IProductInfo } from "../CreateProductForm"

export type ISliderParams = {
    pageIndex: number,
    selectedMediaIndex: number
}

export interface IImageSlider {
    elements: File[],
    sliderParams : ISliderParams
    setSliderParams : Dispatch<SetStateAction<ISliderParams>>,
    setProductInfo:  Dispatch<SetStateAction<IProductInfo>>
}