
import { PaginationPageLoader, PaginationWrapper } from "./components/PaginationModule/styles";
import { SearchContent, SearchContentWrapper, SearchProductLoader } from "./styles";

export default function SearchPageLoading(){

    const MAX_LOADERS_COUNT = 10
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