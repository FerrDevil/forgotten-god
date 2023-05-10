"use client"
import {StoreBrowsePanel, WishlistLink, CartLink, CartLinkSVG, WishlistLinkSVG } from './storeNavigation'
import SearchByTitle from "@/services/store/components/SearchByTitle/SearchByTitle.jsx"


const StoreNavigation = () => {
    /* const {userInfo, error, isLoading} = useSelector((state) => state.user) */

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