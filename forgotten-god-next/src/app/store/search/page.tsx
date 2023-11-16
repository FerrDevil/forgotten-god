import { Suspense } from 'react'
import { Metadata } from 'next'
import SearchProducts from './components/SearchProducts/SearchProducts'
import SearchProductLoading from './components/SearchProducts/loading'


export const metadata: Metadata = {
    title: "Поиск | Forgotten God"
}

const SearchPage = async ({ searchParams }) => {

    const searchQueryParams = {
        price: searchParams.price || 2200,
        title: searchParams.title || "",
        includedTags: searchParams.includedTags || "",
        excludedTags: searchParams.excludedTags || "",
        page: searchParams.page || 1
    }
    

    const queryParams = {
        price: parseInt(searchQueryParams.price),
        title: searchQueryParams.title,
        includedTags: searchQueryParams.includedTags.split(",").filter(tag => tag !== "").map((tag) => Number(tag)), // makes a number array from 1,2,3 string
        excludedTags: searchQueryParams.excludedTags.split(",").filter(tag => tag !== "").map((tag) => Number(tag)),
        page: parseInt(searchQueryParams.page)
    }
     

    return(
        <>
            <Suspense key={searchParams.page} fallback={<SearchProductLoading/>}>
                <SearchProducts searchQueryParams={queryParams} /* products={products} *//>
            </Suspense>
        </>
    )
}

export default SearchPage