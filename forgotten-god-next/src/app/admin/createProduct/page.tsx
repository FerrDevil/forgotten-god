/* "use client" */
import CreateProductForm from "@/app/admin/createProduct/components/CreateProductForm/CreateProductForm"

import { TTag } from "@/types/store/types"
import { getUserInfo } from "@/utils/userAuth/getUserInfo"


async function getTags() {
    const response = await fetch(`${process.env.HOST_DOMAIN}/admin/getTags`)
    return await response.json()
}


export default async function AdminCreateProductPage (){
    const tags: TTag[] = await getTags()  
    const userInfo = await getUserInfo()

    return(
        <CreateProductForm userInfo={userInfo} tags={tags}/>
    )
}
