"use client"
import { memo } from "react";
import { PaginationCurrentPage, PaginationPageLink, PaginationWrapper } from "./styles";
import { useRouter, useSearchParams } from "next/navigation";


export default memo(function PaginationModule({currentPage, maxPageCount}: {currentPage: number, maxPageCount: number}){
    const pages = Array.from(Array(maxPageCount).keys()).map(page => page + 1)
    const searchParams = useSearchParams()


    return (
        <PaginationWrapper>
            { maxPageCount > 1 &&
                pages.map(page => (
                    page === currentPage ?
                    <PaginationCurrentPage key={page}>{page}</PaginationCurrentPage> :
                    <PaginationPageLink href={`/store/search?page=${page}&price=${searchParams.get("price")}&title=${searchParams.get("title")}&includedTags=${searchParams.get("includedTags")}&excludedTags=${searchParams.get("excludedTags")}`} key={page}>{page}</PaginationPageLink>
                ))
            }
        </PaginationWrapper>
    )
} )