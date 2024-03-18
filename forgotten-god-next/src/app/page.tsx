import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation"
import RecommendationCarousel from "@/services/store/components/RecommendationCarousel/RecommendationCarousel"
import { Metadata } from "next"
import { cache } from "react"
import prisma from "@/lib/prisma/prisma"


export const metadata: Metadata = {
  title: "Forgotten God"
}

  const getRecommendedProducts = cache(async () => {
  
    const products = await prisma.product.findMany()
    return products.map(product => ({
      id: product.id,
      image: product.logo
    }))
  
})

export default async function StorePage() {

  const recommendedProducts = await getRecommendedProducts()

  return (
    <>
      <StoreNavigation/>
      <RecommendationCarousel products={recommendedProducts}/>
    </>
  )
}
