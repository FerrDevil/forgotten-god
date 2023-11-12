"use client"

import { Suspense, useEffect, useState } from "react"
import { ISearchParams } from "../../types"
import SearchPanel from "./SearchPanel/SearchPanel"
import { ITag } from "@/app/admin/tags/components/AdminTagsHandler/types"
import { useRouter } from "next/navigation"
import SearchProducts from "./SearchProducts/SearchProducts"

export default function SearchStateHandler({products, searchQueryParams, tags}: {products, searchQueryParams, tags: ITag[]}) {
    
    const router = useRouter()
    const [searchParams, setSearchParams] = useState<ISearchParams>({
        price: parseInt(searchQueryParams.price),
        title: searchQueryParams.title,
        includedTags: searchQueryParams.includedTags.split(",").filter(tag => tag !== "").map((tag) => Number(tag)), // makes a number array from 1,2,3 string
        excludedTags: searchQueryParams.excludedTags.split(",").filter(tag => tag !== "").map((tag) => Number(tag)),
    })

    

    useEffect(() => {
        router.replace(`?price=${searchParams.price}&title=${searchParams.title}&includedTags=${searchParams.includedTags.join(",")}&excludedTags=${searchParams.excludedTags.join(",")}`)
    }, [searchParams])


    return (
        <>
            <SearchPanel searchParams={searchParams} setSearchParams={setSearchParams} tags={tags}/>
            <SearchProducts products={products}/>
           
        </>
    )
}