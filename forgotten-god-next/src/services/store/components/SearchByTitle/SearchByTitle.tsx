"use client"

import Link from "next/link"
import { SearchInput, SearchInputSVG, SearchResults, SearchResult, SearchResultBlock, SearchResultPrice, SearchResultTitle, SearchResultImage, SearchInputWrapper } from "./styles"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"


const SearchByTitle = () => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const [areResultsVisible, setResultsVisible] = useState(true)

    
    const router = useRouter()
    const inputRef = useRef(null)

    const onSearchInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            router.push(`/store/search?${inputRef.current.value ? `title=${inputRef.current.value}` : ''}`)
        }
    } 
    
    useEffect(() => {
        if (!title){
            setProducts([])
            return
        }

        const setFilteredProducts = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/searchProductsByTitle/${title}`)
            const filteredProducts = await response.json()
            setProducts(filteredProducts)
        }
        setFilteredProducts()
        
     }, [title])

    return (
        <SearchInputWrapper>
            <SearchResults $isVisible={areResultsVisible}>
                {products.map(product => (
                    <SearchResult href={`/store/product/${product?.id}`} key={product?.id}>
                        <SearchResultBlock>
                            src={`${process.env.HOST_DOMAIN}/image/${product.logo}`}
                            <ImageLoader src={`${product.logo}`} alt="productImage" width={1600} height={900} sizes="100vw" priority={true}/>
                            <SearchResultTitle>{product?.title}</SearchResultTitle>
                        </SearchResultBlock>
                        <SearchResultPrice>{product?.price} ₽</SearchResultPrice>
                        
                    </SearchResult>
                ))}
            </SearchResults>
            <SearchInput ref={inputRef} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setTitle(event.target.value)}} onKeyUp={onSearchInputKeyUp} placeholder='Поиск по названию' value={title}/>
            <Link href="/store/search">
                <SearchInputSVG/>
            </Link>
        </SearchInputWrapper>
    )
}

export default SearchByTitle