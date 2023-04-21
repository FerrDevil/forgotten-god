import styled from "styled-components"

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
    padding: 40px 40px;
    border-radius: 20px;
    background-color: #222222;
    width: 100%;
    min-height: 100%;
    height: 100%;
`

export const ProductFormHeader = styled.h2`
    color: #ccc;
    font-size: 30px;
`

export const ProductTextInputLabelText = styled.span`
    position: absolute;
    color: #ccc;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    transition: top 0.25s cubic-bezier(0.0, 0, 0.2, 1), font-size 0.2s cubic-bezier(0.0, 0, 0.2, 1) ;
   
    
`

export const ProductTextInputLabel = styled.label`
    position: relative;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    padding: 25px 20px 8px 20px;
    border: none;
    outline: 1px solid ${props => ( props.isInvalid ? '#c52929' : 'transparent')};
    
    &:has(input:focus), &:has(textarea:focus){
        outline: 1px solid #ccc;
    }
    
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
`




export const ProductTextInput = styled.input`
    font-size: 16px;
    width: 400px;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    
    border: none;
    outline: none;
    
    &:focus ~ ${ProductTextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${ProductTextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 14px;
    }
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
`

export const ProductTextarea = styled.textarea`
    font-size: 16px;
    width: 400px;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    border: none;
    outline: none;
    
    height: 70px;
    overflow: auto;

    &::-webkit-scrollbar{
        appearance: none;
        width: 7px;
    }

    &::-webkit-scrollbar-track{
        border-radius: 100vh;
        background-color: #212121;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 100vh;
        background-color: #3f3f3f;
    }
   
    &:focus ~ ${ProductTextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${ProductTextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 14px;
    }
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
    resize: none;
`


export const ProductButton = styled.button`
    font-size: 18px;
    color: #ccc;
    background-color: #282828;
    border: none;
    width: 400px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #37373a;
    }
    &:disabled{
        color: #4e4e4e;
        cursor: default;
    }
`

export const ProductImageUploadLabel = styled.label`
    display: block;
    position: relative;
    border-radius: 10px;
    width: 440px;
    height: 50px;
    padding: 10px 20px;
    background-color: #282828;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:focus, &:hover{
        background-color: #780c0c;
    }
`

export const ProductImageUploadLabelText = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    color: #ccc;
    font-size: 18px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    user-select: none;
`

export const ProductImageUploadInput = styled.input`
    display: none;
`