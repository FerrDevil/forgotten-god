
import OrderButtons from "./components/OrderButtons/OrderButtons"
import Media from "./components/MediaSlider/MediaSlider"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation"
import { ProductPageWrapper, BriefGameInfo, GameTitle, GameLogo, GameCost, MainInfoWrapper, MainInfo, MainInfoSidebar, WishlistButton, GameDetails, GameDetail, GameDetailName, GameDetailValueWrapper, GameDetailValue, GameSynopsis, GameSynopsisHeader, GameSynopsisParagraph, ReviewsBlock, ReviewsBlockHeader, ReviewsBlockContent, GameLogoWrapper, ProductFormGameTagsContainer, ProductFormGameTagsWrapper } from "./style"
import { IProduct, IProductPageProps } from "./types"
import { ProductFormGameTagName, ProductFormGameTagWrapper, ProductFormGameTagsHeader } from "@/app/admin/createProduct/components/CreateProductForm/styles"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"


export async function generateMetadata ({params}: IProductPageProps) {
    const request = await fetch(`${process.env.HOST_DOMAIN}/store/getProductById/${params.id}`)
    if (!request.ok){
        notFound()
    }
    const response = await request.json()

    return {
        title: `${response.title} | Forgotten God`
    }
}

async function getProductById(id: number){
    const request = await fetch(`${process.env.HOST_DOMAIN}/store/getProductById/${id}`)
    if (!request.ok){
        notFound()
    }
    const response = await request.json()
    return response
}


const ProductPage = async ({params} : IProductPageProps) => {

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
                        <GameTitle>{product.title}</GameTitle>
                        <GameLogoWrapper>
                            <ImageLoader src={`${product.logo}`} width={1600} height={900} sizes="100vw" alt="gameLogo" priority={true}/>
                        </GameLogoWrapper>
                        <GameCost>{`${product.price} ₽`}</GameCost>
                        <OrderButtons product={product}/>
                        
                        <WishlistButton>В желаемое</WishlistButton>
                    </BriefGameInfo>
                    <GameDetails>
                        <GameDetail>
                            <GameDetailName>Разработчик</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product.developer}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        <GameDetail>
                            <GameDetailName>Издатель</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product.publisher}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        <GameDetail>
                            <GameDetailName>Дата выхода</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{validatedPublishedDate}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        
                    </GameDetails>
                    <ProductFormGameTagsWrapper>
                                <ProductFormGameTagsHeader>Тэги</ProductFormGameTagsHeader>
                                <ProductFormGameTagsContainer>
                                    {product.tags.sort((a, b) => a.name.localeCompare(b.name)).map((tag) => (
                                        <ProductFormGameTagWrapper key={tag.id}>
                                            <ProductFormGameTagName>{tag.name}</ProductFormGameTagName>
                                        </ProductFormGameTagWrapper>
                                    ))}
                                </ProductFormGameTagsContainer>
                            </ProductFormGameTagsWrapper>
                </MainInfoSidebar>
            </MainInfoWrapper>
            {/* <ReviewsBlock>
                <ReviewsBlockHeader>Отзывы</ReviewsBlockHeader>
                <ReviewsBlockContent></ReviewsBlockContent>
            </ReviewsBlock> */}
            
            
        </ProductPageWrapper>
    )
}

export default ProductPage




