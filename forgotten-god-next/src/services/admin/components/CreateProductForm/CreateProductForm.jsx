import { useState, useEffect } from "react"

import { ProductButton, ProductForm, ProductFormHeader, ProductTextInput, ProductTextInputLabel, ProductTextInputLabelText, ProductImageUploadInput, ProductTextarea, ProductImageUploadLabel, ProductImageUploadLabelText } from "./createProductForm"

const CreateProductForm = () => {
    const [productInfo, setProductInfo] = useState({
        title: " ",
        logo: "",
        price: "0",
        synopsis: " ",
    })

    const onChangeProductInfo = (inputName) => {
        return (event) => {
            setProductInfo(prev => ({...prev, [inputName] : inputName === "price" ? (event.target.value? parseInt(event.target.value) : "") : event.target.value}))
        }
    }

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    useEffect(
        () => {
            if (!productInfo.title || productInfo.title?.trim() === ''){
                setSubmitButtonDisabled(true)
                return
            }
            if (!productInfo.logo){
                setSubmitButtonDisabled(true)
                return
            }
            if (!productInfo.price || productInfo.price === '0'){
                setSubmitButtonDisabled(true)
                return
            }
            if (!productInfo.synopsis || productInfo.synopsis?.trim() === ''){
                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [productInfo]
    )

    const [errorMessageText, setErrorMessageText] = useState("")


    const errorMessageAnimation = (text) => {
        setErrorMessageText(text)
        setTimeout(() => {
            setErrorMessageText('')
        }, 1100)
    }


    const createNewProduct = async (event) => {
        event.preventDefault()
        const refreshResponse = await fetch('https://forgotten-god.onrender.com/auth/refresh', {method: "POST", credentials: "include"})
        const response = await fetch('https://forgotten-god.onrender.com/admin/createGame', {method: "POST", credentials: "include", body: JSON.stringify(productInfo)})
        const productId = await response.json()
        const fileData = new FormData()
        fileData.append("file", productInfo.logo,  productInfo.logo.name)
        const uploadLogoResponse = await fetch(`/admin/setGameLogo/${productId.id}`, {
            method: "POST",
            body: fileData,
        })

        console.log(await uploadLogoResponse.json())
        
    }
    return (
        <ProductForm method="POST" >
            <ProductFormHeader>Создание нового продукта</ProductFormHeader>
            <ProductTextInputLabel isInvalid={!productInfo.title}>
                <ProductTextInput id="title" name="title"  onChange={onChangeProductInfo('title')} placeholder=" " />
                <ProductTextInputLabelText>Название</ProductTextInputLabelText>
            </ProductTextInputLabel>
            <ProductImageUploadLabel>
                <ProductImageUploadInput type="file" onChange={
                    (event) => {
                        setProductInfo(prev => ({...prev, logo : event.target.files[0]}))
                    }
        }/>
                <ProductImageUploadLabelText>Выберите логотип</ProductImageUploadLabelText>
            </ProductImageUploadLabel>
            
            <ProductTextInputLabel isInvalid={!productInfo.synopsis}>
                <ProductTextarea id="synopsis" name="synopsis"  onChange={onChangeProductInfo('synopsis')} placeholder=" " />
                <ProductTextInputLabelText>Синопсис</ProductTextInputLabelText>
            </ProductTextInputLabel>
            <ProductTextInputLabel isInvalid={!productInfo.price}>
                <ProductTextInput value={productInfo.price} min={0} step={100} type={"number"} inputMode="numeric" pattern="[0-9]" id="price" name="price"  onChange={onChangeProductInfo('price')} placeholder=" " />
                <ProductTextInputLabelText>Цена</ProductTextInputLabelText>
                
            </ProductTextInputLabel>
            <ProductButton disabled={isSubmitButtonDisabled} onClick={createNewProduct} type="submit">Создать</ProductButton>
            
        </ProductForm>
    )
}
export default CreateProductForm