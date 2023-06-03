import { Metadata } from "next"


export const metadata : Metadata = {
    title: "Пользователи | Forgotten God"
}

export default async function Layout({children} : {children: React.ReactNode}) {
    return (
    <>
        {children}
    </>
)
}