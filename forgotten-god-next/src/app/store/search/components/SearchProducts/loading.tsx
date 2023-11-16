"use client"

import { PaginationPageLoader, PaginationWrapper } from "../PaginationModule/styles";
import { SearchContent, SearchContentWrapper, SearchProductLoader } from "./styles";

export default function SearchProductLoading(){

    const MAX_LOADERS_COUNT = 20
    const productLoaders = Array.from(Array(MAX_LOADERS_COUNT).keys())

    return (
        <SearchContentWrapper>
            <SearchContent>
                {
                   productLoaders.map(i => (
                    <SearchProductLoader key={i}/>
                   )) 
                }
            </SearchContent>
            <PaginationWrapper>
                <PaginationPageLoader/>
                <PaginationPageLoader/>
                <PaginationPageLoader/>
            </PaginationWrapper>
        </SearchContentWrapper>
    )
}