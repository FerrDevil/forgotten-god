import AdminTagsHandler from "./components/AdminTagsHandler/AdminTagsHandler"
import { TTag } from "@/types/store/types"

async function getTags() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/admin/getTags`)
    return await response.json()
}

export default async function AdminTagsPage  ()  {
    const tags: TTag[] = await getTags()  

    return(
        <AdminTagsHandler tags={tags}/>
    )
}