import { SearchContainer } from "./styles";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { TTag } from "@/types/store/types";


async function getTags() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/store/getTags`, {method: "GET"})
    const allTags = (await response.json() as TTag[] | null).sort((a, b) => a.name.localeCompare(b.name))
    return allTags
}

export default async function SearchPageLayout({children} : {children: React.ReactNode}){

    const tags = await getTags()
    
    return (
        <SearchContainer >
    
            <SearchPanel  tags={tags}/>
            {children}
        </SearchContainer >
    )
}