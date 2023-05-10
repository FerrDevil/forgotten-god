import BasePageLayout from "@/components/Layout/BasePageLayout.jsx"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import RecommendationCarousel from "@/services/store/components/RecommendationCarousel/RecommendationCarousel.jsx"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Forgotten God"
}

export default function StorePage() {
  return (
    <>
      <StoreNavigation/>
      <RecommendationCarousel/>
    </>
  )
}
