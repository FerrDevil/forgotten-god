import prisma from "@/lib/prisma/prisma"
import { Product } from "@prisma/client"
import { cache } from "react"
import { TSearchPageValidatedSearchParams } from "./types"

const MAX_ELEMENTS_PER_PAGE = 2


export const getExtendedSearchProducts = cache(async (searchParams: TSearchPageValidatedSearchParams) => {
    const extendedSearchProducts =  (await prisma.product.findMany())
    let filteredProducts = []

    for (let product of extendedSearchProducts){
        const titleCheck = product.title.includes(searchParams.title)
        const priceCheck = parseInt(product.price) <= searchParams.price ||  searchParams.price === 2200
        const productTagsIds = (await prisma.productTag.findMany({
            where: {
                productId: product.id
            }
        })).map(tag => tag.tagId)

        const includedTagsCheck = (searchParams.includedTags.every(id => productTagsIds.includes(id)) && searchParams.includedTags.length > 0) || searchParams.includedTags.length === 0
        const excludedTagsCheck = (searchParams.excludedTags.every(id => !productTagsIds.includes(id)))
        titleCheck && priceCheck && includedTagsCheck && excludedTagsCheck && (filteredProducts = [...filteredProducts, product])
    }

    const maxPageCount = Math.ceil(filteredProducts.length / MAX_ELEMENTS_PER_PAGE)

    const products = filteredProducts.filter((_, productIndex) => (MAX_ELEMENTS_PER_PAGE * searchParams.page) - MAX_ELEMENTS_PER_PAGE <= productIndex && productIndex < MAX_ELEMENTS_PER_PAGE * searchParams.page)

    return [ products, maxPageCount ] as [ Product[], number ]
})