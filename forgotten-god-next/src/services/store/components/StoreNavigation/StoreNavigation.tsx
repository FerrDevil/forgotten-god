"use client"
import {StoreBrowsePanel, WishlistLink, CartLink, CartLinkSVG, WishlistLinkSVG } from './styles'
import SearchByTitle from "@/services/store/components/SearchByTitle/SearchByTitle.jsx"


const StoreNavigation = () => {

    return(
        <StoreBrowsePanel>
            <WishlistLink href='/user/wishlist'>
                <WishlistLinkSVG/>
            </WishlistLink>
            <CartLink href="/store/cart"><CartLinkSVG/></CartLink>
            <SearchByTitle/>
            
        </StoreBrowsePanel>
    )
}




export default StoreNavigation