"use client"

import Link from "next/link"
import { SearchInput, SearchInputSVG, SearchResults, SearchResult, SearchResultBlock, SearchResultPrice, SearchResultTitle, SearchResultImage, SearchInputWrapper } from "./searchByTitle"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"


const SearchByTitle = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const [areResultsVisible, setResultsVisible] = useState(true)

    
    const router = useRouter()

    const onSearchInputKeyUp = (event) => {
        if (event.key === 'Enter'){
            router.push(`/store/search?${event.target.value ? `title=${event.target.value}` : ''}`)
        }
    } 
    
    useEffect(() => {
        if (!title){
            setProducts([])
             return
        }

        const setFilteredProducts = async () => {
            const response = await fetch(`https://forgotten-god.onrender.com/store/searchProductsByTitle/${title}`)
            const filteredProducts = await response.json()
            setProducts(filteredProducts)
        }
        setFilteredProducts()
        
     }, [title])

    return (
        <SearchInputWrapper>
            <SearchResults $isVisible={areResultsVisible}>
                {products.map((product, productIndex) => (
                    <SearchResult href={`/store/product/${product?.id}`} key={productIndex}>
                        <SearchResultBlock>
                            <SearchResultImage src={product?.logo ? `/image/${product?.logo}` : ""}/>
                            <SearchResultTitle>{product?.title}</SearchResultTitle>
                        </SearchResultBlock>
                        <SearchResultPrice>{product?.price} ₽</SearchResultPrice>
                        
                    </SearchResult>
                ))}
            </SearchResults>
            <SearchInput onChange={(event) => {setTitle(event.target.value)}} onKeyUp={onSearchInputKeyUp} placeholder='Поиск по названию' value={title}/>
            <Link href="/store/search">
                <SearchInputSVG/>
            </Link>
        </SearchInputWrapper>
    )
}

export default SearchByTitle