import { SearchContainer } from "./styles";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { cache } from "react";
import prisma from "@/lib/prisma/prisma";


const getAllTags = cache(async () => {
    const allTags = (await prisma.tag.findMany())?.sort((a, b) => a.name.localeCompare(b.name))
    return allTags
})

export default async function SearchPageLayout({children} : {children: React.ReactNode}){

    const tags = await getAllTags()
    
    return (
        <SearchContainer >
    
            <SearchPanel tags={tags}/>
            {children}
        </SearchContainer >
    )
}