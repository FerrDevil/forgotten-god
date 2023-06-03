
import OrderButtons from "@/app/store/product/[id]/components/OrderButtons/OrderButtons"
import Media from "@/app/store/product/[id]/components/MediaSlider/MediaSlider"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import { ProductPageWrapper, BriefGameInfo, GameTitle, GameLogo, GameCost, MainInfoWrapper, MainInfo, MainInfoSidebar, WishlistButton, GameDetails, GameDetail, GameDetailName, GameDetailValueWrapper, GameDetailValue, GameSynopsis, GameSynopsisHeader, GameSynopsisParagraph, ReviewsBlock, ReviewsBlockHeader, ReviewsBlockContent, GameLogoWrapper} from "@/services/store/styles/product.js"
import { IProduct } from "./types"




async function getProductById(id: number){
    const request = await fetch(`${process.env.HOST_DOMAIN}/store/getProductById/${id}`)
    if (!request.ok){
        throw new Error("No such product exists")
    }
    const response = await request.json()
    return response
}


const ProductPage = async ({params} : {params: {id: number}}) => {

    const product: IProduct = await getProductById(params.id)

    const validatedPublishedDate = new Intl.DateTimeFormat().format(new Date(product?.publishDate)) 
    return (
        <ProductPageWrapper>
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
                        <GameLogoWrapper>
                            <GameLogo src={product?.logo ? `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/image/${product.logo}` : ""} alt="gameLogo"/>
                        </GameLogoWrapper>
                        <GameCost>{`${product?.price} ₽`}</GameCost>
                        <OrderButtons product={product}/>
                        
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
                                <GameDetailValue>{validatedPublishedDate}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        
                    </GameDetails>
                </MainInfoSidebar>
            </MainInfoWrapper>
            <ReviewsBlock>
                <ReviewsBlockHeader>Отзывы</ReviewsBlockHeader>
                <ReviewsBlockContent></ReviewsBlockContent>
            </ReviewsBlock>
            
            
        </ProductPageWrapper>
    )
}

export default ProductPage




