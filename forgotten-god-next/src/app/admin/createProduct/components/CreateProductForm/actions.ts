"use server"
import fs from "fs"

import prisma from "@/lib/prisma/prisma"


export default async function createGame(userId: string, formData: FormData,) {
    console.log(formData)
    const tags: number[] = JSON.parse(formData.get("tags") as string )
    console.log(tags)
    const mediaFiles = formData.getAll("media") as File[]
    const logo = formData.get("logo") as File
    const logoFilePath = await uploadFile(logo, "./public/uploads/image/")
    
    const product = await prisma.product.create({
        data: {
            logo: logoFilePath,
            title: formData.get("title") as string,
            price: formData.get("price") as string,
            synopsis: formData.get("synopsis") as string,
            developerId: userId,
            publisherId: userId,
        }
    })
    let mediaData = []
    for (let file of mediaFiles){
        const [fileType] =  file.type.split("/")
        let logoFilePath: string = await uploadFile(file, `./public/uploads/${fileType}/` )
        mediaData = [...mediaData, {
            type: fileType,
            src: logoFilePath
        }]
    }
    

    await prisma.media.createMany({
        data: mediaData
    })
    const media = await prisma.media.findMany({
        where: {
            src: {
                in: mediaData.map(data => data.src)
            }
        }
    })

    const productMediaData = media.map(mediaUnit => (
        {
            productId: product.id,
            mediaId: mediaUnit.id,
        }
    ))

    const productMedia = await prisma.productMedia.createMany({
        data: productMediaData
    })
    

    const chosenTags = await prisma.tag.findMany({
        where: {
            id: {
                in: tags
            }
        }
    })

    const productTagsData = chosenTags.map(tagUnit => (
        {
            productId: product.id,
            tagId: tagUnit.id,
        }
    ))

    const productTags = await prisma.productTag.createMany({
        data: productTagsData
    })

}


export async function uploadFile(file: File, folderPath: string="./public/uploads/image/") {
    let isError = false
    let filePath = `${folderPath}${file.name}`
    
    while (!isError){
        try{
            fs.accessSync(filePath)
            isError = false
            const [name, format] = filePath.replace(folderPath, "").split(".")
            filePath = `${folderPath}${name}1.${format}`
            
        }
        catch(error){
            isError = true
        }
    }
    const fileBuffer = await file.arrayBuffer()
    
    
    fs.appendFile(filePath, Buffer.from(fileBuffer) , (error) => {
        if (error) console.log(error)
    })

    return filePath.replace("./public", "")
}