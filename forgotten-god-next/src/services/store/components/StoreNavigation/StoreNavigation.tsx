
import { StoreBrowsePanel, WishlistLink, CartLink, CartLinkSVG, WishlistLinkSVG } from './styles'
import SearchByTitle from "@/services/store/components/SearchByTitle/SearchByTitle"
import { auth } from '@/utils/userAuth/auth'


const StoreNavigation = async () => {

    const userInfo = (await auth())?.user

    return(
        <StoreBrowsePanel>
            <WishlistLink href={`${userInfo?.id ? "/store/wishlist": "/signIn"}`}>
                <WishlistLinkSVG/>
            </WishlistLink>
            <CartLink href={`${userInfo?.id ? "/store/cart": "/signIn"}`}>
                <CartLinkSVG/>
            </CartLink>
            <SearchByTitle/>
            
        </StoreBrowsePanel>
    )
}




export default StoreNavigation