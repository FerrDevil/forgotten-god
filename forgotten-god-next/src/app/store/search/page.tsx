"use client"

import React, {useEffect, useState } from 'react'
import { SearchContainer, SearchPanel, SearchFilters, SearchFiltersContainer, SearchInputWrapper, SearchInputImage, SearchInput, SearchControls, SearchControlsHeader, SearchControlsHeaderTitle, SearchControlsClose, SearchControlsContent, SearchPrices, SearchPricesTitle, SearchPricesRangeWrapper, SearchPricesRange, SearchPricesRangeHint, SearchTags, SearchTagsTitle,SearchTagsWrapper, SearchTag, SearchTagName, SearchTagIncludeCheckboxWrapper, SearchTagIncludeCheckboxSVG, SearchTagIncludeCheckbox, SearchTagExcludeCheckboxWrapper, SearchTagExcludeCheckbox, SearchTagExcludeCheckboxSVG, } from '@/services/store/styles/searchPage'
import { useSearchParams } from 'next/navigation'
import SearchProducts from '@/services/store/components/SearchPage/SearchProducts/SearchProducts'

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

     useEffect(() => {
        const updateProducts = async () => { //https://forgotten-god.onrender.com
            const response = await fetch(`${process.env.PUBLIC_NEXT_HOST_DOMAIN || "http://localhost:5000"}/store/getProducts`, {method: "POST", body: JSON.stringify(searchParams)})
            const filteredProducts = await response.json()
            filteredProducts && setProducts(filteredProducts)
        }
        updateProducts()
        
     }, [searchParams])


     

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
                                        <SearchPricesRange type="range" min={0} max={2200} step={200} value={searchParams.price} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {setSearchParams(prev => ({...prev, price: parseInt(event.target.value)}))}} />
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
                                                        (event : React.ChangeEvent<HTMLInputElement>) => {
                                                            addIncludedTags(event, tag.id)
                                                        }
                                                        }
                                                        />
                                                    <SearchTagIncludeCheckboxSVG/>
                                                </SearchTagIncludeCheckboxWrapper>
                                                
                                                <SearchTagExcludeCheckboxWrapper>
                                                    <SearchTagExcludeCheckbox onChange={
                                                        (event : React.ChangeEvent<HTMLInputElement>) => {
                                                            addExcludedTags(event, tag.id)
                                                        }}
                                                        />
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
                <SearchProducts products={products}/>
            </SearchContainer>
        </>
    )
}

export default SearchPage