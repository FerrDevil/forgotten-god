import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation"
import RecommendationCarousel from "@/services/store/components/RecommendationCarousel/RecommendationCarousel"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Forgotten God"
}

async function getRecommendedProducts() {
  const response = await fetch(`${process.env.HOST_DOMAIN}/store/getRecommendedProducts`, {
    cache: 'no-store'
  }) 
  return response.json() 
}

export default async function StorePage() {

  const recommendedProducts = await getRecommendedProducts()

  return (
    <>
      <StoreNavigation/>
      <RecommendationCarousel products={recommendedProducts}/>
    </>
  )
}
