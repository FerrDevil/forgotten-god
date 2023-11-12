import React, {Suspense, useEffect, useState } from 'react'
import { SearchContainer } from './styles'
import { Metadata } from 'next'
import SearchStateHandler from './components/SearchStateHandler/SearchStateHandler'

export const metadata: Metadata = {
    title: "Поиск | Forgotten God"
}

async function getTags() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/getTags`, {method: "GET"})
    const allTags = await response.json()
    return allTags
}

async function getProducts(searchParams) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/getProducts`, {
        method: "POST",
        body: JSON.stringify(searchParams),
        next: {revalidate: 1000}
    })
    const filteredProducts =  response.json()
    return filteredProducts
}

const SearchPage = async ({params, searchParams}) => {

    /* console.log(searchParams) */
    const searchQueryParams = {
        price: searchParams.price || 2200,
        title: searchParams.title || "",
        includedTags: searchParams.includedTags || "",
        excludedTags: searchParams.excludedTags || "",
    }
    /* console.log(searchQueryParams) */
    const tags = await getTags()

    const queryParams = {
        price: parseInt(searchQueryParams.price),
        title: searchQueryParams.title,
        includedTags: searchQueryParams.includedTags.split(",").filter(tag => tag !== "").map((tag) => Number(tag)), // makes a number array from 1,2,3 string
        excludedTags: searchQueryParams.excludedTags.split(",").filter(tag => tag !== "").map((tag) => Number(tag)),
    }
    const products = await getProducts(queryParams)
    console.log(products)
     

    return(
        <>
            <SearchContainer>
                <Suspense fallback={<>...Loading</>}>
                    <SearchStateHandler products={products} searchQueryParams={searchQueryParams} tags={tags}/>
                </Suspense>
                
            </SearchContainer>
        </>
    )
}

export default SearchPage