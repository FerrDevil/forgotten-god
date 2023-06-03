export type Tag = {
    id: number,
    name: string
}

export type Media = {
    type: string,
    src: string
}


export interface IProduct{
    id: number,
    title: string,
    logo: string,
    developer_id: string
    developer: string
    publisher_id: string
    publisher: string
    publishDate: string
    media: Media[]
    tags: Tag[]
    synopsis: string
    price: number
}