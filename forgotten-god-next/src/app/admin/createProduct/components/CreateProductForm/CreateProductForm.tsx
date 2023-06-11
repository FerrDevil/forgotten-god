"use client"

import { useState, useEffect } from "react"

import { ProductButton, ProductForm, ProductFormHeader, ProductFormContent, ProductFormMainInfoWrapper, ProductFormMainInfo, ProductFormMainInfoSidebar, ProductFormBriefGameInfo, ProductFormGameLogoWrapper, ProductFormGameLogo, ProductFormWishlistButton, ProductFormOrderButtonWrapper, ProductFormOrderButton, ProductFormCartButton, ProductFormCartSVG, ProductFormGameDetails, ProductFormGameDetail, ProductFormGameDetailName, ProductFormGameDetailValueWrapper, ProductFormGameDetailValue, ProductFormGameTagsWrapper, ProductFormGameTagsHeader, ProductFormGameTagsContainer, ProductFormGameSynopsis, ProductFormGameSynopsisHeader, ProductFormGameLogoFileInput, ProductFormGameLogoFileInputWrapper, ProductFormGameLogoFileInputDescriptionWrapper, ProductFormGameLogoFileInputDescription, ProductImagePlaceholderSVG, ProductFormGameTagsAddButton, ProductFormGameTagsAddButtonSVG, ProductFormGameTagWrapper, ProductFormGameTagName, ProductFormGameTagDeleteButton, ProductFormGameTagsDeleteButtonSVG } from "./styles"
import { useSelector } from "react-redux"
import { ITag } from "@/app/admin/tags/components/AdminTagsHandler/types"
import TitleField from "./TitleField/TitleField"
import SynopsisField from "./SynopsisField/SynopsisField"
import MediaSlider from "@/app/admin/createProduct/components/CreateProductForm/MediaSlider/MediaSlider"
import PriceField from "./PriceField/PriceField"
import AddTagModal from "./AddTagModal/AddTagModal"
import { useUserSelector } from "@/store/store"

export type IProductInfo = {
    title: string,
    logo: File | null,
    price: string,
    synopsis: string,
    tags: ITag[]
    media: File[]
}

const CreateProductForm = ({tags}) => {
   
    const [productInfo, setProductInfo] = useState<IProductInfo>({
        title: "Название",
        logo: null,
        price: "0",
        synopsis: "Описание",
        tags: [],
        media: []
    })

    const {userInfo} = useUserSelector()

    const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true)

    const [isAddTagModalOpen, setAddTagModalOpen] = useState(false) 

    const onChangeProductInfo = (inputName: string) => {
        return (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setProductInfo(prev => ({...prev, [inputName] : inputName === "price" ? (event.target.value? parseInt(event.target.value) : "") : event.target.value}))
        }
    }

    

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
            if (!productInfo.price){
                setSubmitButtonDisabled(true)
                return
            }
            if (!productInfo.synopsis || productInfo.synopsis?.trim() === ''){
                setSubmitButtonDisabled(true)
                return
            }
            if (!productInfo.tags || productInfo.tags.length === 0){
                setSubmitButtonDisabled(true)
                return
            }
            if (!productInfo.media || productInfo.media.length === 0){
                setSubmitButtonDisabled(true)
                return
            }
            setSubmitButtonDisabled(false) 
        }, [productInfo]
    )

    const openTagsModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setAddTagModalOpen(true)
    }


    const setTags = async (id : number) => {
        const setTagsResponse = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN  || "http://localhost:5000"}/admin/setGameTags/${id}`, {
            method: "POST",
            body: JSON.stringify(productInfo.tags),
            credentials: "include"
        })

        return await setTagsResponse.json()
    }   

    const setLogo = async (id : number) => {
        const fileData = new FormData()
        fileData.append("file", productInfo.logo,  productInfo.logo.name)
        const uploadLogoResponse = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN  || "http://localhost:5000"}/admin/setGameLogo/${id}`, {
            method: "POST",
            body: fileData,
            credentials: "include"
        })

        return await uploadLogoResponse.json()
    }    

    const setMediaFiles = async (id : number) => {
        const mediaData = new FormData()
        productInfo.media.forEach((mediaItem, index) => {
            mediaData.append(`file${index}`, mediaItem,  mediaItem.name)
        })
        
        const uploadMediaResponse = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN  || "http://localhost:5000"}/admin/setGameMedia/${id}`, {
            method: "POST",
            body: mediaData,
            credentials: "include"
        })

        return await uploadMediaResponse.json()
    }


    const createNewProduct = async (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const refreshResponse = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN || "http://localhost:5000"}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.PUBLIC_ENV_HOST_DOMAIN  || "http://localhost:5000"}/admin/createGame`, {method: "POST", credentials: "include", body: JSON.stringify(productInfo)})
        const product = await response.json()
        console.log(product)
        
        const logoResponse = await setLogo(product.id)
        const tagsResponse = await setTags(product.id)
        const mediaResponse = await setMediaFiles(product.id)
        

        
    }
    return (
        <ProductForm method="POST" >
            <ProductFormHeader>Создание нового продукта</ProductFormHeader>
            <ProductFormContent>
                <ProductFormMainInfoWrapper>
                    <ProductFormMainInfo>
                        <MediaSlider setProductInfo={
                           setProductInfo
                        } mediaElements={
                            productInfo.media
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
                            <PriceField price={productInfo.price} setPrice={onChangeProductInfo("price")}/>

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
                                    {productInfo.tags.map((tag) => (
                                        <ProductFormGameTagWrapper key={tag.id}>
                                            <ProductFormGameTagName>{tag.name}</ProductFormGameTagName>
                                            <ProductFormGameTagDeleteButton onClick={
                                                (event: React.MouseEvent<HTMLButtonElement> ) => {
                                                    setProductInfo(prev => ({...prev, tags : prev.tags.filter((curTag) => curTag.id !== tag.id)}))
                                                }
                                            }>
                                                <ProductFormGameTagsDeleteButtonSVG/>
                                            </ProductFormGameTagDeleteButton >
                                        </ProductFormGameTagWrapper>
                                    ))}
                                    <ProductFormGameTagsAddButton onClick={openTagsModal}><ProductFormGameTagsAddButtonSVG/></ProductFormGameTagsAddButton>
                                </ProductFormGameTagsContainer>

                                <AddTagModal isOpen={isAddTagModalOpen} setOpen={setAddTagModalOpen} tags={tags} setProductsInfo={setProductInfo}/>
                            </ProductFormGameTagsWrapper>
                        </ProductFormGameDetails>
                    </ProductFormMainInfoSidebar>
                </ProductFormMainInfoWrapper>
            </ProductFormContent>
            <ProductButton disabled={isSubmitButtonDisabled} onClick={createNewProduct}>Создать</ProductButton>
        </ProductForm>
    )
}
export default CreateProductForm

