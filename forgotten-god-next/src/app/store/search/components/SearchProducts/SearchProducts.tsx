import { Suspense } from "react"
import SearchProduct from "./SearchProduct"
import {SearchContent, SearchContentWrapper, SearchNoSuchProductsFound} from "./styles"
import { SearchingProduct } from "./types"
import PaginationModule from "../PaginationModule/PaginationModule"



async function getExtendedSearchProducts(searchParams) {
    const response = await fetch(`${process.env.HOST_DOMAIN}/store/getExtendedSearchProducts?page=${searchParams.page}&price=${searchParams.price}&title=${searchParams.title}&includedTags=${searchParams.includedTags.join(",")}&excludedTags=${searchParams.excludedTags.join(",")}`, {
        cache: "no-store"
    })
    /* if(!response.ok)
         throw Error("Connection timeout") */
    const extendedSearchProducts = await response.json()
    if (extendedSearchProducts?.error){
        throw Error(extendedSearchProducts.error)
    }
    
    return extendedSearchProducts
}

const SearchProducts = async ({searchQueryParams}) => {
    
    const {products, maxPageCount} = await getExtendedSearchProducts(searchQueryParams)
    return(
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
    )
}

export default SearchProducts