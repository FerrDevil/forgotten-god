"use client"
import { ITag } from "@/app/admin/tags/components/AdminTagsHandler/types"
import { SearchControls, SearchControlsClose, SearchControlsContent, SearchControlsHeader, SearchControlsHeaderTitle, SearchFilters, SearchFiltersContainer, SearchInput, SearchInputImage, SearchInputWrapper, SearchPanelWrapper, SearchPrices, SearchPricesRange, SearchPricesRangeHint, SearchPricesRangeWrapper, SearchPricesTitle, SearchTag, SearchTagExcludeCheckbox, SearchTagExcludeCheckboxSVG, SearchTagExcludeCheckboxWrapper, SearchTagIncludeCheckbox, SearchTagIncludeCheckboxSVG, SearchTagIncludeCheckboxWrapper, SearchTagName, SearchTags, SearchTagsTitle, SearchTagsWrapper } from "./styles"
import { useState } from "react"

export default function SearchPanel({searchParams, setSearchParams, tags} : {searchParams, setSearchParams, tags: ITag[]}){

    const [areFiltersOpen, setFiltersOpen] = useState(false)


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
    
    return (
        <SearchPanelWrapper>
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
                        {<SearchPrices>
                            <SearchPricesTitle>Цены</SearchPricesTitle>
                            <SearchPricesRangeWrapper>
                                <SearchPricesRange type="range" min={0} max={2200} step={200} value={searchParams.price} onInput={(event: React.ChangeEvent<HTMLInputElement>) => {setSearchParams(prev => ({...prev, price: parseInt(event.target.value)}))}} />
                                <SearchPricesRangeHint>{ searchParams.price === 0 ? "Бесплатно" : searchParams.price === 2200 ? "Любая цена" : `До ${searchParams.price}`}</SearchPricesRangeHint>
                            </SearchPricesRangeWrapper>
                        </SearchPrices> }
                        <SearchTags>
                            <SearchTagsTitle>Тэги</SearchTagsTitle>
                            <SearchTagsWrapper>
                                {tags.sort((a, b) => a.name.localeCompare(b.name)).map((tag, tagIndex) => (
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
        
        </SearchPanelWrapper>
    )
}