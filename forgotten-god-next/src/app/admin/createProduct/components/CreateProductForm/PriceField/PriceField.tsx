"use client"

import { useState } from "react";
import { ProductFormGamePrice, TitleFieldEditButton, TitleFieldEditButtonSVG, TitleFieldInput, TitleFieldInputWrapper, TitleFieldSaveButtonSVG, TitleFieldWrapper } from "./style";
import { IPriceField } from "./types";

export default function PriceField({price, setPrice} : IPriceField) {
    const [isEdit, setEdit] = useState(false)

    return (
        <TitleFieldWrapper>
            <TitleFieldInputWrapper $isInputShown={isEdit}>
                <ProductFormGamePrice  onDoubleClick={() => {setEdit(prev => !prev)}}>{price} ₽</ProductFormGamePrice>
                <TitleFieldInput type="number" id="price" name="price" onChange={setPrice}/>
            </TitleFieldInputWrapper>
            <TitleFieldEditButton onClick={(event) => {
                event.preventDefault()
                setEdit(prev => !prev)
                }}>
                {
                    isEdit ?
                    <TitleFieldSaveButtonSVG/> :
                    <TitleFieldEditButtonSVG/>
                }
            </TitleFieldEditButton>
        </TitleFieldWrapper>
    )
}