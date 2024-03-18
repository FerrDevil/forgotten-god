import prisma from "@/lib/prisma/prisma"
import AdminTagsHandler from "./components/AdminTagsHandler/AdminTagsHandler"
import { cache } from "react"

const getTags = cache(async () => {
    const tags = await prisma.tag.findMany()
    return tags
})

export default async function AdminTagsPage()  {
    const tags = await getTags()  

    return(
        <AdminTagsHandler tags={tags}/>
    )
}