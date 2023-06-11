/* "use client" */
import CreateProductForm from "@/app/admin/createProduct/components/CreateProductForm/CreateProductForm"
import { ITag } from "../tags/components/AdminTagsHandler/types"


async function getTags() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/admin/getTags`)
    return await response.json()
}


export default async function AdminCreateProductPage (){
    const tags: ITag[] = await getTags()  

    return(
        <CreateProductForm tags={tags}/>
    )
}
