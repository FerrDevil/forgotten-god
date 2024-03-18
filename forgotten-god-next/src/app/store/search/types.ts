export type TSearchPageSearchParams = {
    price: string | undefined
    title: string | undefined
    includedTags: string | undefined
    excludedTags: string | undefined
    page: string | undefined
}

export type TSearchPageValidatedSearchParams = {
    price: number
    title: string | undefined
    includedTags: number[]
    excludedTags: number[],
    page: number
}



