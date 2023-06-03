"use client"

import { useState } from "react";
import { ProductFormGameTitle, TitleFieldEditButton, TitleFieldEditButtonSVG, TitleFieldInput, TitleFieldInputWrapper, TitleFieldSaveButtonSVG, TitleFieldWrapper } from "./style";
import { ITitleField } from "./types";

export default function TitleField({title, setTitle} : ITitleField) {
    const [isEdit, setEdit] = useState(false)

    return (
        <TitleFieldWrapper>
            <TitleFieldInputWrapper $isInputShown={isEdit}>
                <ProductFormGameTitle onDoubleClick={() => {setEdit(prev => !prev)}}>{title}</ProductFormGameTitle>
                <TitleFieldInput  onChange={setTitle}/>
            </TitleFieldInputWrapper>
            <TitleFieldEditButton onClick={() => {setEdit(prev => !prev)}}>
                {
                    isEdit ?
                    <TitleFieldSaveButtonSVG/> :
                    <TitleFieldEditButtonSVG/>
                }
            </TitleFieldEditButton>
        </TitleFieldWrapper>
    )
}