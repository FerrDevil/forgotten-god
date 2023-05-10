"use client"

import {useEffect, useState } from 'react'
import { SearchContainer, SearchPanel, SearchFilters, SearchFiltersContainer, SearchInputWrapper, SearchInputImage, SearchInput, SearchControls, SearchControlsHeader, SearchControlsHeaderTitle, SearchControlsClose, SearchControlsContent, SearchContent, SearchProduct, SearchProductImage, SearchProductInfo, SearchProductTitle, SearchProductPrice, SearchPrices, SearchPricesTitle, SearchPricesRangeWrapper, SearchPricesRange, SearchPricesRangeHint, SearchTags, SearchTagsTitle,SearchTagsWrapper, SearchTag, SearchTagName, SearchTagIncludeCheckboxWrapper, SearchTagIncludeCheckboxSVG, SearchTagIncludeCheckbox, SearchTagExcludeCheckboxWrapper, SearchTagExcludeCheckbox, SearchTagExcludeCheckboxSVG, SearchNoSuchProductsFound, AddToCartButton, AddToCartSVG} from '@/services/store/styles/searchPage'
import useDebounce from '@/hooks/useDebounce'
import { useSearchParams } from 'next/navigation'

interface ISearchParams {
    price: number
    title: string | undefined
    includedTags: number[]
    excludedTags: number[]
}

const SearchPage = () => {


    const title = useSearchParams().get('title') || ""
    
    
    const [searchParams, setSearchParams] = useState<ISearchParams>({
        price: 2200,
        title: title,
        includedTags: [],
        excludedTags: [],
    })
    
    const [areFiltersOpen, setFiltersOpen] = useState(false)
    const [products, setProducts] = useState([])

    const tags = [
        {
            id: 1,
            name: "2D"
        },
        {
            id: 2,
            name: "3D"
        },
        {
            id: 3,
            name: "Beat `em up"
        },
    ]

    const addIncludedTags = (event : React.ChangeEvent<HTMLInputElement>, id : number) => {
        if (searchParams.excludedTags.includes(id)){
            event.target.checked = false
            return
        }
        if(event.target.checked){
            setSearchParams(prev => ({...prev, includedTags: [...prev.includedTags, id]}))
        }
        else{
            setSearchParams(prev => ({...prev, includedTags: prev.includedTags.filter(tags => tags !== id)}))
        }
    }

    const addExcludedTags = (event : React.ChangeEvent<HTMLInputElement>, id: number) => {
        if (searchParams.includedTags.includes(id)){
            event.target.checked = false
            return
        } 
        
        if(event.target.checked){
            setSearchParams(prev => ({...prev, excludedTags: [...prev.excludedTags, id]}))
        }
        else{
            setSearchParams(prev => ({...prev, excludedTags: prev.excludedTags.filter(tags => tags !== id)}))
            
            
        }   
    }

    const debouncedSearchParams = useDebounce(searchParams, 500);
     useEffect(() => {
        if(!debouncedSearchParams) return
        const updateProducts = async () => {
            const response = await fetch('https://forgotten-god.onrender.com/store/getProducts', {method: "POST", body: JSON.stringify(searchParams)})
            const filteredProducts = await response.json()
            filteredProducts && setProducts(filteredProducts)
        }
        updateProducts()
        
     }, [searchParams, debouncedSearchParams])


     const addToCart = async (productIndex: number) => {
        const refreshResponse = await fetch("/auth/refresh", {method: "POST", credentials: "include"})
        const response = await fetch("/store/addToCart", {method: "POST", credentials: "include", body: JSON.stringify({productId: productIndex})})
     }

    return(
        <>
            <SearchContainer>
                <SearchPanel>
                    <SearchInputWrapper>
                        <SearchInputImage/>
                        <SearchInput onChange={(event => {setSearchParams(prev => ({...prev, title: event.target.value}))})} value={ searchParams.title } placeholder='Поиск по названию'/>
                    </SearchInputWrapper>
                    <SearchFiltersContainer>
                        <SearchFilters onClick={() => {setFiltersOpen(prev => !prev)}}/>
                        <SearchControls $isVisible={areFiltersOpen}>
                            <SearchControlsHeader>
                                <SearchControlsHeaderTitle>Фильтры</SearchControlsHeaderTitle>
                                <SearchControlsClose onClick={() => {setFiltersOpen(prev => !prev)}}/>
                            </SearchControlsHeader>
                            <SearchControlsContent>
                                <SearchPrices>
                                    <SearchPricesTitle>Цены</SearchPricesTitle>
                                    <SearchPricesRangeWrapper>
                                        <SearchPricesRange type="range" min={0} max={2200} step={200} value={searchParams.price} onInput={(event : React.FormEvent<HTMLInputElement>) => {setSearchParams(prev => ({...prev, price: parseInt(event.target.value)}))}} />
                                        <SearchPricesRangeHint>{ searchParams.price === 0 ? "Бесплатно" : searchParams.price === 2200 ? "Любая цена" : `До ${searchParams.price}`}</SearchPricesRangeHint>
                                    </SearchPricesRangeWrapper>
                                </SearchPrices>
                                <SearchTags>
                                    <SearchTagsTitle>Тэги</SearchTagsTitle>
                                    <SearchTagsWrapper>
                                        {tags.map((tag, tagIndex) => (
                                            <SearchTag key={tagIndex}>
                                                <SearchTagName>{tag.name}</SearchTagName>
                                                <SearchTagIncludeCheckboxWrapper>
                                                    <SearchTagIncludeCheckbox onChange={
                                                        (event) => {
                                                            addIncludedTags(event, tag.id)
                                                        }
                                                        }
                                                        type="checkbox"/>
                                                    <SearchTagIncludeCheckboxSVG/>
                                                </SearchTagIncludeCheckboxWrapper>
                                                
                                                <SearchTagExcludeCheckboxWrapper>
                                                    <SearchTagExcludeCheckbox onClick={(e) => {return false}} onChange={
                                                        (event) => {
                                                            addExcludedTags(event, tag.id)
                                                        }}
                                                        type="checkbox"/>
                                                    <SearchTagExcludeCheckboxSVG/>
                                                </SearchTagExcludeCheckboxWrapper>
                                            
                                            </SearchTag>
                                        ))}
                                        
                                    </SearchTagsWrapper>
                                </SearchTags>
                            </SearchControlsContent>
                            
                            
                        </SearchControls>
                    </SearchFiltersContainer>
                    
                </SearchPanel>
                    <SearchContent>
                        {products.map((product, productIndex) => 
                            <SearchProduct key={productIndex} href={`/store/product/${product?.id}`} onClick={(event) => {event.stopPropagation()}}>
                                <AddToCartButton onClick={(event) => {event.preventDefault();addToCart(productIndex)}}>
                                    <AddToCartSVG/>
                                </AddToCartButton>
                                <SearchProductImage src={product?.logo && `https://forgotten-god.onrender.com/image/${product?.logo}`}/>
                                <SearchProductInfo>
                                    <SearchProductTitle>{product?.title}</SearchProductTitle>
                                    <SearchProductPrice>{product?.price} ₽</SearchProductPrice>
                                </SearchProductInfo>
                            </SearchProduct>
                        )}
                    
                    </SearchContent>
                
                {products.length === 0 && <SearchNoSuchProductsFound>По вашему запросу ничего не найдено</SearchNoSuchProductsFound>}
            </SearchContainer>
        </>
    )
}

export default SearchPage