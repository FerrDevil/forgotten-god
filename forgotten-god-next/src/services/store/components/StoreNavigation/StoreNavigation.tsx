import { getUserInfo } from '@/utils/userAuth/getUserInfo'
import {StoreBrowsePanel, WishlistLink, CartLink, CartLinkSVG, WishlistLinkSVG } from './styles'
import SearchByTitle from "@/services/store/components/SearchByTitle/SearchByTitle"


const StoreNavigation = async () => {

    const userInfo = await getUserInfo()

    return(
        <StoreBrowsePanel>
            <WishlistLink href={`${userInfo?.userId ? "/store/wishlist": "/login"}`}>
                <WishlistLinkSVG/>
            </WishlistLink>
            <CartLink href={`${userInfo?.userId ? "/store/cart": "/login"}`}>
                <CartLinkSVG/>
            </CartLink>
            <SearchByTitle/>
            
        </StoreBrowsePanel>
    )
}




export default StoreNavigation