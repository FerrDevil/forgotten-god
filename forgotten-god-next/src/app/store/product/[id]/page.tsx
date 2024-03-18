
import OrderButtons from "./components/OrderButtons/OrderButtons"
import Media from "./components/MediaSlider/MediaSlider"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation"
import { ProductPageWrapper, BriefGameInfo, GameTitle, GameLogo, GameCost, MainInfoWrapper, MainInfo, MainInfoSidebar, WishlistButton, GameDetails, GameDetail, GameDetailName, GameDetailValueWrapper, GameDetailValue, GameSynopsis, GameSynopsisHeader, GameSynopsisParagraph, ReviewsBlock, ReviewsBlockHeader, ReviewsBlockContent, GameLogoWrapper, ProductFormGameTagsContainer, ProductFormGameTagsWrapper } from "./style"
import { IProduct, IProductPageProps } from "./types"
import { ProductFormGameTagName, ProductFormGameTagWrapper, ProductFormGameTagsHeader } from "@/app/admin/createProduct/components/CreateProductForm/styles"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"
import prisma from "@/lib/prisma/prisma"
import { cache } from "react"
import { notFound } from "next/navigation"
import { auth } from "@/utils/userAuth/auth"


export async function generateMetadata ({params}: IProductPageProps) {
    const product = await getProductById(params.id)

    return {
        title: `${product.title} | Forgotten God`
    }
}

const getProductById = cache( async (id: number) => {

    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    })

    if (!product){
        notFound()
    }
    const productMedia = await prisma.productMedia.findMany({
        where: {
            productId: product.id
        }
    })
    const media = await prisma.media.findMany({
        where: {
            id: {
                in: productMedia.map(productMediaUnit => (productMediaUnit.mediaId))
            }
        }
    })

    const productTags = await prisma.productTag.findMany({
        where: {
            productId: product.id
        }
    })
    const tags = await prisma.tag.findMany({
        where: {
            id: {
                in: productTags.map(productTagUnit => (productTagUnit.tagId))
            }
        }
    })

    const user = (await auth())?.user



    const developer = await prisma.user.findFirst({
        where: {
            id: product.developerId
        }
    })
    const publisher = (await prisma.user.findFirst({
        where: {
            id: product.publisherId
        }
    }))
    const cartItem = user?.id ? (await prisma.cart.findFirst({
        where: {
            productId: product.id,
            userId: user?.id
        }
    })) : null

    const productInfo = {
        ...product,
        developer: developer,
        publisher: publisher,
        media: media,
        tags: tags, 
        isInCart: !!cartItem
    }
    return productInfo
})


const ProductPage = async ({params} : IProductPageProps) => {

    const userId = (await auth())?.user
    const product = await getProductById(params.id)

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
                        <OrderButtons userId={userId} product={product}/>
                        
                        <WishlistButton>В желаемое</WishlistButton>
                    </BriefGameInfo>
                    <GameDetails>
                        <GameDetail>
                            <GameDetailName>Разработчик</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product.developer.username}</GameDetailValue>
                            </GameDetailValueWrapper>
                        </GameDetail>
                        <GameDetail>
                            <GameDetailName>Издатель</GameDetailName>
                            <GameDetailValueWrapper>
                                <GameDetailValue>{product.publisher.username}</GameDetailValue>
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
                                    {product?.tags?.sort((a, b) => a.name.localeCompare(b.name)).map((tag) => (
                                        <ProductFormGameTagWrapper key={tag.id} href={`/store/search?includedTags=${tag.id}`}>
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




