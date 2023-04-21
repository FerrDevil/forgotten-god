import BasePageLayout from "@/components/Layout/BasePageLayout"
import { useRouter } from "next/router"
import Media from "@/services/store/components/MediaSlider/Media.jsx"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import { BriefGameInfo, GameTitle, GameLogo, GameCost, MainInfoWrapper, MainInfo, MainInfoSidebar, OrderButtonWrapper, OrderButton, CartButton, CartButtonWrapper, WishlistButton, GameDetails, GameDetail, GameDetailName, GameDetailValueWrapper, GameDetailValue, GameSynopsis, GameSynopsisHeader, GameSynopsisParagraph, ReviewsBlock, ReviewsBlockHeader, ReviewsBlockContent} from "@/services/store/styles/product.js"



const ProductPage = ({product}) => {
    const router = useRouter()

    const addToCartHandle = async () => {
        const refreshResponse = await fetch("/auth/refresh", {method: "POST"})
        const response = await fetch("/store/addToCart", {method: "POST", body: JSON.stringify({productId: product.id})})
    }

    const orderProduct = async () => {
        await addToCartHandle()
        router.push("/store/cart")
    }

    const validatedPublishedDate = new Date(product?.publishDate)

    return (
        <BasePageLayout>
            <StoreNavigation/>
            <MainInfoWrapper>
                <MainInfo>
                    <Media mediaElements={product?.media}/>
                    <GameSynopsis>
                        <GameSynopsisHeader>Описание</GameSynopsisHeader>
                        <GameSynopsisParagraph>{product?.synopsis}</GameSynopsisParagraph>
                        
                    </GameSynopsis>
                </MainInfo>
                <MainInfoSidebar>
                    <BriefGameInfo>
                        <GameTitle>{product?.title}</GameTitle>
                        <GameLogo src={product?.logo ? `/image/${product.logo}` : ""}/>
                        <GameCost>{`${product?.price} ₽`}</GameCost>
                        <OrderButtonWrapper>
                            <OrderButton onClick={orderProduct}>Оформить</OrderButton>
                            <CartButtonWrapper tabIndex={0} onClick={addToCartHandle}><CartButton alt="cart"/></CartButtonWrapper>
                        </OrderButtonWrapper>
                        
                        <WishlistButton>В желаемое</WishlistButton>
                    </BriefGameInfo>
                    <GameDetails>
                        <GameDetail>
                            <GameDetailName>Разработчик</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product?.developer}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        <GameDetail>
                            <GameDetailName>Издатель</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product?.publisher}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        <GameDetail>
                            <GameDetailName>Дата выхода</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product?.publishDate && validatedPublishedDate.toLocaleDateString()}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        <GameDetail>
                            <GameDetailName>Платформы</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product?.platforms && product?.platforms[0]}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                    </GameDetails>
                </MainInfoSidebar>
            </MainInfoWrapper>
            <ReviewsBlock>
                <ReviewsBlockHeader>Отзывы</ReviewsBlockHeader>
                <ReviewsBlockContent></ReviewsBlockContent>
            </ReviewsBlock>
            
            
        </BasePageLayout>
    )
}

export default ProductPage


export async function getServerSideProps({req, res, params}){
    console.log(params)
    const request = await fetch(`http://localhost:5000/store/getProductById/${params.id}`)
    const response =  await request.json()
    return {props: {product: response}}
}



