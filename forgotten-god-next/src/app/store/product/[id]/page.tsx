
import OrderButtons from "@/services/store/components/ProductPage/OrderButtons/OrderButtons.jsx"
import Media from "@/services/store/components/MediaSlider/Media.jsx"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import { BriefGameInfo, GameTitle, GameLogo, GameCost, MainInfoWrapper, MainInfo, MainInfoSidebar, WishlistButton, GameDetails, GameDetail, GameDetailName, GameDetailValueWrapper, GameDetailValue, GameSynopsis, GameSynopsisHeader, GameSynopsisParagraph, ReviewsBlock, ReviewsBlockHeader, ReviewsBlockContent, GameLogoWrapper} from "@/services/store/styles/product.js"

type Tag = {
    id: number,
    name: string
}

type Media = {
    type: string,
    src: string
}


interface IProduct{
    id: number,
    title: string,
    logo: string,
    developer_id: string
    developer: string
    publisher_id: string
    publisher: string
    publishDate: string
    media: Media[]
    tags: Tag[]
    synopsis: string
    price: number
}


async function getProductById(id: number){
    const request = await fetch(`https://forgotten-god.onrender.com/store/getProductById/${id}`)
    if (!request.ok){
        throw new Error("No such product exists")
    }
    const response = await request.json()
    return response
}


const ProductPage = async ({params} : {params: {id: number}}) => {

    

    const product: IProduct = await getProductById(params.id)

    

    const validatedPublishedDate = new Intl.DateTimeFormat().format(new Date(product?.publishDate)) 
    console.log(1, validatedPublishedDate)
    return (
        <>
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
                            <GameLogo src={product?.logo ? `https://forgotten-god.onrender.com/image/${product.logo}` : ""} alt="gameLogo"/>
                        </GameLogoWrapper>
                        <GameCost>{`${product?.price} ₽`}</GameCost>
                        <OrderButtons/>
                        
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
            
            
        </>
    )
}

export default ProductPage




