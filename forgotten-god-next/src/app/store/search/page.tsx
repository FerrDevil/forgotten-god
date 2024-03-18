
import { Metadata } from 'next'
import { TSearchPageSearchParams, TSearchPageValidatedSearchParams } from './types'

import PaginationModule from './components/PaginationModule/PaginationModule'
import { SearchContent, SearchContentWrapper, SearchNoSuchProductsFound } from './styles'
import SearchProduct from './components/SearchProducts/SearchProduct'
import { getExtendedSearchProducts } from './requests'


export const metadata: Metadata = {
    title: "Поиск | Forgotten God"
}


const SearchPage = async ({ searchParams }: { searchParams: TSearchPageSearchParams }) => {

    const searchQueryParams : TSearchPageValidatedSearchParams = {
        price: parseInt(searchParams.price) || 2200,
        title: searchParams.title || "",
        includedTags: searchParams.includedTags?.split(",").filter(tag => tag !== "").map((tag) => Number(tag)) || [],
        excludedTags: searchParams.excludedTags?.split(",").filter(tag => tag !== "").map((tag) => Number(tag)) || [],
        page: parseInt(searchParams.page) || 1
    }

    const [products, maxPageCount] = await getExtendedSearchProducts(searchQueryParams)
     

    return(
        <>
            
        <SearchContentWrapper>
            {
                products?.length > 0 ?
                <>
                <SearchContent>
                    {
                    products.map((product) => 
                        <SearchProduct key={product.id} product={product}/>
                    )

                    }  </SearchContent>
                <PaginationModule currentPage={searchQueryParams.page} maxPageCount={maxPageCount}/>
                </> :
                <SearchNoSuchProductsFound>По вашему запросу ничего не найдено</SearchNoSuchProductsFound>     
            }
            
        </SearchContentWrapper>
            
        </>
    )
}

export default SearchPage