import CreateProductForm from "@/app/admin/createProduct/components/CreateProductForm/CreateProductForm"
import prisma from "@/lib/prisma/prisma"
import { auth } from "@/utils/userAuth/auth"
import { cache } from "react"


const getTags = cache(async () => {
    const tags = await prisma.tag.findMany()
    return tags
})


export default async function AdminCreateProductPage (){
    const tags = await getTags()  
    const userInfo = (await auth()).user

    return(
        <CreateProductForm userInfo={userInfo} tags={tags}/>
    )
}
