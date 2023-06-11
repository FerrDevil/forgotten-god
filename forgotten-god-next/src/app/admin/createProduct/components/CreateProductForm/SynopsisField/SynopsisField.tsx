"use client"

import { useState } from "react";
import { ProductFormGameSynopsisParagraph, TitleFieldEditButton, TitleFieldEditButtonSVG, TitleFieldInput, TitleFieldInputWrapper, TitleFieldSaveButtonSVG, TitleFieldWrapper } from "./styles";
import { ISynopsisField } from "./types";

export default function SynopsisField({synopsis, setSynopsis} : ISynopsisField) {
    const [isEdit, setEdit] = useState(false)

    return (
        <TitleFieldWrapper>
            <TitleFieldInputWrapper $isInputShown={isEdit}>
                <ProductFormGameSynopsisParagraph onDoubleClick={() => {setEdit(prev => !prev)}}>{synopsis}</ProductFormGameSynopsisParagraph>
                <TitleFieldInput onChange={setSynopsis}/>
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