import { useRouter } from 'next/router'
import {StoreBrowsePanel, SearchInput, SearchInputSVG, SearchResults, SearchResult, SearchResultBlock, SearchResultPrice, SearchResultTitle, SearchResultImage, SearchInputWrapper, WishlistLink, CartLink, CartLinkSVG, WishlistLinkSVG } from './storeNavigation'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const StoreNavigation = () => {
    const {userInfo, error, isLoading} = useSelector((state) => state.user)

    return(
        <StoreBrowsePanel>
            <WishlistLink href='/user/wishlist'>
                <WishlistLinkSVG/>
            </WishlistLink>
            <CartLink href={userInfo?.user !== "Unauthorized" && !error ? "/store/cart": ""}><CartLinkSVG/></CartLink>
            <SearchByTitle/>
            
        </StoreBrowsePanel>
    )
}


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
            <SearchInput /* onFocus={() => {setResultsVisible(true)}} onBlur={(event) => {console.log(event);setResultsVisible(false)}} */  onChange={(event) => {setTitle(event.target.value)}} onKeyUp={onSearchInputKeyUp} placeholder='Поиск по названию' value={title}/>
            <SearchInputSVG/>
        </SearchInputWrapper>
    )
}

export default StoreNavigation