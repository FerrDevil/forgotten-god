"use client"

import { useState, useEffect } from "react"

import { ProductButton, ProductForm, ProductFormHeader, ProductFormContent, ProductFormMainInfoWrapper, ProductFormMainInfo, ProductFormMainInfoSidebar, ProductFormBriefGameInfo, ProductFormGameLogoWrapper, ProductFormGameLogo, ProductFormGamePrice, ProductFormWishlistButton, ProductFormOrderButtonWrapper, ProductFormOrderButton, ProductFormCartButton, ProductFormCartSVG, ProductFormGameDetails, ProductFormGameDetail, ProductFormGameDetailName, ProductFormGameDetailValueWrapper, ProductFormGameDetailValue, ProductFormGameTagsWrapper, ProductFormGameTagsHeader, ProductFormGameTagsContainer, ProductFormGameSynopsis, ProductFormGameSynopsisHeader, ProductFormGameLogoFileInput, ProductFormGameLogoFileInputWrapper, ProductFormGameLogoFileInputDescriptionWrapper, ProductFormGameLogoFileInputDescription, ProductImagePlaceholderSVG } from "./styles"
import { useSelector } from "react-redux"
import { ITag } from "@/app/admin/tags/components/AdminTagsHandler/types"
import TitleField from "./TitleField/TitleField"
import SynopsisField from "./SynopsisField/SynopsisField"
import MediaSlider from "@/app/store/product/[id]/components/MediaSlider/MediaSlider"

const CreateProductForm = ({tags}) => {
    type IProductInfo = {
        title: string,
        logo: File | null,
        price: string,
        synopsis: string,
        tags: ITag[]
    }

    const [productInfo, setProductInfo] = useState<IProductInfo>({
        title: "Название",
        logo: null,
        price: "0",
        synopsis: "Описание",
        tags: []
    })

    const onChangeProductInfo = (inputName: string) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setProductInfo(prev => ({...prev, [inputName] : inputName === "price" ? (event.target.value? parseInt(event.target.value) : "") : event.target.value}))
        }
    }

    const {userInfo} = useSelector(state => state.user)

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



    const createNewProduct = async (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const refreshResponse = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN || "http://localhost:5000"}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN  || "http://localhost:5000"}/admin/createGame`, {method: "POST", credentials: "include", body: JSON.stringify(productInfo)})
        const productId = await response.json()
        const fileData = new FormData()
        fileData.append("file", productInfo.logo,  productInfo.logo.name)
        const uploadLogoResponse = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN  || "http://localhost:5000"}/admin/setGameLogo/${productId.id}`, {
            method: "POST",
            body: fileData,
            credentials: "include"
        })
    }
    return (
        <ProductForm method="POST" >
            <ProductFormHeader>Создание нового продукта</ProductFormHeader>
            <ProductFormContent>
                <ProductFormMainInfoWrapper>
                    <ProductFormMainInfo>
                        <MediaSlider mediaElements={
                            [
                                {
                                    'type': 'image',
                                    'src': '/img1.jpg'
                                },
                            ]
                        }/>
                        <ProductFormGameSynopsis>
                            <ProductFormGameSynopsisHeader>Описание</ProductFormGameSynopsisHeader>
                                <SynopsisField synopsis={productInfo.synopsis} setSynopsis={onChangeProductInfo("synopsis")}/>
                        </ProductFormGameSynopsis>
                    </ProductFormMainInfo>
                    <ProductFormMainInfoSidebar>
                        <ProductFormBriefGameInfo>
                            <TitleField title={productInfo.title} setTitle={onChangeProductInfo("title")}/>
                            <ProductFormGameLogoWrapper>
                               {productInfo.logo && <ProductFormGameLogo src={URL.createObjectURL(productInfo.logo)}/>}
                                <ProductFormGameLogoFileInputWrapper $notLogoSet={!productInfo.logo}>
                                    <ProductFormGameLogoFileInput onChange={(event : React.ChangeEvent<HTMLInputElement>) => setProductInfo(prev => ({...prev, logo: event.target.files[0]}))}/>
                                    <ProductFormGameLogoFileInputDescriptionWrapper>
                                        <ProductFormGameLogoFileInputDescription>Загрузить лого</ProductFormGameLogoFileInputDescription>
                                        <ProductImagePlaceholderSVG/>
                                    </ProductFormGameLogoFileInputDescriptionWrapper>
                                </ProductFormGameLogoFileInputWrapper>
                                
                            </ProductFormGameLogoWrapper>
                            <ProductFormGamePrice>
                                {productInfo.price} ₽
                            </ProductFormGamePrice>

                            <ProductFormOrderButtonWrapper>
                                <ProductFormOrderButton>Оформить</ProductFormOrderButton>
                                <ProductFormCartButton>
                                    <ProductFormCartSVG/>
                                </ProductFormCartButton>
                            </ProductFormOrderButtonWrapper>

                            <ProductFormWishlistButton>В желаемое</ProductFormWishlistButton>

                        </ProductFormBriefGameInfo>
                        <ProductFormGameDetails>
                            <ProductFormGameDetail>
                                <ProductFormGameDetailName>Разработчик</ProductFormGameDetailName>
                                <ProductFormGameDetailValueWrapper>
                                    <ProductFormGameDetailValue>{userInfo.username}</ProductFormGameDetailValue>
                                </ProductFormGameDetailValueWrapper>
                            </ProductFormGameDetail>
                            <ProductFormGameDetail>
                                <ProductFormGameDetailName>Издатель</ProductFormGameDetailName>
                                <ProductFormGameDetailValueWrapper>
                                    <ProductFormGameDetailValue>{userInfo.username}</ProductFormGameDetailValue>
                                </ProductFormGameDetailValueWrapper>
                            </ProductFormGameDetail>
                            <ProductFormGameDetail>
                                <ProductFormGameDetailName>Дата выхода</ProductFormGameDetailName>
                                <ProductFormGameDetailValueWrapper>
                                    <ProductFormGameDetailValue>{new Intl.DateTimeFormat().format(Date.now()) }</ProductFormGameDetailValue>
                                </ProductFormGameDetailValueWrapper>
                            </ProductFormGameDetail>
                            <ProductFormGameTagsWrapper>
                                <ProductFormGameTagsHeader>Тэги</ProductFormGameTagsHeader>
                                <ProductFormGameTagsContainer>
                                    {productInfo.tags.map(tag => (
                                        <div key={tag.id}>
                                            <span>{tag.name}</span>
                                            <button>x</button>
                                        </div>
                                    ))}
                                </ProductFormGameTagsContainer>
                            </ProductFormGameTagsWrapper>
                        </ProductFormGameDetails>
                    </ProductFormMainInfoSidebar>
                </ProductFormMainInfoWrapper>
            </ProductFormContent>
            <ProductButton onClick={createNewProduct}>Создать</ProductButton>
        </ProductForm>
    )
}
export default CreateProductForm

