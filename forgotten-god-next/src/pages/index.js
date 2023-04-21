import BasePageLayout from "@/components/Layout/BasePageLayout.jsx"
import StoreNavigation from "../services/store/components/StoreNavigation/StoreNavigation.jsx"
import RecommendationCarousel from "@/services/store/components/RecommendationCarousel/RecommendationCarousel.jsx"

const StorePage = () => {
  return (
    <BasePageLayout>
      <StoreNavigation/>
      <RecommendationCarousel/>
    </BasePageLayout>
  )
}

export default StorePage
