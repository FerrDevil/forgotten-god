"use client"
import { SearchControls, SearchControlsClose, SearchControlsContent, SearchControlsHeader, SearchControlsHeaderTitle, SearchFilters, SearchFiltersContainer, SearchInput, SearchInputImage, SearchInputWrapper, SearchPanelWrapper, SearchPrices, SearchPricesRange, SearchPricesRangeHint, SearchPricesRangeWrapper, SearchPricesTitle, SearchTag, SearchTagExcludeCheckbox, SearchTagExcludeCheckboxSVG, SearchTagExcludeCheckboxWrapper, SearchTagIncludeCheckbox, SearchTagIncludeCheckboxSVG, SearchTagIncludeCheckboxWrapper, SearchTagName, SearchTags, SearchTagsTitle, SearchTagsWrapper } from "./styles"
import { memo, useEffect, useState } from "react"
import { TSearchPageValidatedSearchParams } from "../../types"
import { useRouter, useSearchParams } from "next/navigation"
import useDeferedEffect from "@/hooks/useDeferedEffect"
import { Tag } from "@prisma/client"


export default memo(function SearchPanel({ tags} : {tags: Tag[]}){

    const [areFiltersOpen, setFiltersOpen] = useState(false)
    const searchParams = useSearchParams()
    
    const [queryParams, setQueryParams] = useState<TSearchPageValidatedSearchParams>({
        price: parseInt(searchParams.get("price")) || 2200,
        title: searchParams.get("title") || "",
        includedTags: searchParams.get("includedTags")?.split(",").filter((tagIndex: string) => tagIndex !== "").map((tagIndex: string) => Number(tagIndex)) || [],
        excludedTags: searchParams.get("excludedTags")?.split(",").filter((tagIndex: string) => tagIndex !== "").map((tagIndex: string) => Number(tagIndex)) || [],
        page: parseInt(searchParams.get("page")) || 1
    })
    const { replace, push } = useRouter()

    const titleChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setQueryParams(prev => ({...prev, page: 1, title: event.target.value}))
    }

    const addIncludedTags = (event : React.ChangeEvent<HTMLInputElement>, id : number) => {
        if (queryParams.excludedTags.includes(id)){
            event.target.checked = false
            return
        }
        if(event.target.checked){
            setQueryParams(prev => ({...prev, page: 1, includedTags: [...prev.includedTags, id]}))
        }
        else{
            setQueryParams(prev => ({...prev, page: 1, includedTags: prev.includedTags.filter(tags => tags !== id)}))
        }
    }
        

    const addExcludedTags = (event : React.ChangeEvent<HTMLInputElement>, id: number) => {
        if (queryParams.includedTags.includes(id)){
            event.target.checked = false
            return
        } 
        
        if(event.target.checked){
            setQueryParams(prev => ({...prev, excludedTags: [...prev.excludedTags, id]}))
        }
        else{
            setQueryParams(prev => ({...prev, excludedTags: prev.excludedTags.filter(tags => tags !== id)}))
        } 
        
    }
    useEffect(() => {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("page", queryParams.page.toString())
        newSearchParams.set("price", queryParams.price.toString())
        newSearchParams.set("title", queryParams.title)
        newSearchParams.set("includedTags", queryParams.includedTags.join(","))
        newSearchParams.set("excludedTags", queryParams.excludedTags.join(","))
        replace(`/store/search?${newSearchParams}`)
        
    }, [queryParams])
    useDeferedEffect(() => {
       const newSearchParams = new URLSearchParams(searchParams)
       newSearchParams.set("page", queryParams.page.toString())
       newSearchParams.set("price", queryParams.price.toString())
       newSearchParams.set("title", queryParams.title)
       newSearchParams.set("includedTags", queryParams.includedTags.join(","))
       newSearchParams.set("excludedTags", queryParams.excludedTags.join(","))
       push(`/store/search?${newSearchParams}`)
    }, [queryParams.page])

    
    return (
        <SearchPanelWrapper>
             <SearchInputWrapper>
                <SearchInputImage/>
                <SearchInput onChange={titleChangeHandle} value={ queryParams.title } placeholder='Поиск по названию'/>
            </SearchInputWrapper>
            <SearchFiltersContainer>
                <SearchFilters onClick={() => {setFiltersOpen(prev => !prev)}}/>
                <SearchControls $isVisible={areFiltersOpen}>
                    <SearchControlsHeader>
                        <SearchControlsHeaderTitle>Фильтры</SearchControlsHeaderTitle>
                        <SearchControlsClose onClick={() => {setFiltersOpen(prev => !prev)}}/>
                    </SearchControlsHeader>
                    <SearchControlsContent>
                        {<SearchPrices>
                            <SearchPricesTitle>Цены</SearchPricesTitle>
                            <SearchPricesRangeWrapper>
                                <SearchPricesRange type="range" min={0} max={2200} step={200} value={queryParams.price} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {setQueryParams(prev => ({...prev, price: parseInt(event.target.value)}))}} />
                                <SearchPricesRangeHint>{ queryParams.price === 0 ? "Бесплатно" : queryParams.price === 2200 ? "Любая цена" : `До ${queryParams.price}`}</SearchPricesRangeHint>
                            </SearchPricesRangeWrapper>
                        </SearchPrices> }
                        <SearchTags>
                            <SearchTagsTitle>Тэги</SearchTagsTitle>
                            <SearchTagsWrapper>
                                {tags.map((tag, tagIndex) => (
                                    <SearchTag key={tagIndex}>
                                        <SearchTagName>{tag.name}</SearchTagName>
                                        <SearchTagIncludeCheckboxWrapper>
                                            <SearchTagIncludeCheckbox
                                                checked={queryParams.includedTags.includes(tag.id)}
                                                onChange={
                                                (event : React.ChangeEvent<HTMLInputElement>) => {
                                                    addIncludedTags(event, tag.id)
                                                }
                                                }
                                                />
                                            <SearchTagIncludeCheckboxSVG/>
                                        </SearchTagIncludeCheckboxWrapper>
                                        
                                        <SearchTagExcludeCheckboxWrapper>
                                            <SearchTagExcludeCheckbox
                                                checked={queryParams.excludedTags.includes(tag.id)}
                                                onChange={
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
        
        </SearchPanelWrapper>
    )
})