import { auth } from "@/utils/userAuth/auth"
import { Metadata } from "next"
import { redirect } from "next/navigation"


export const metadata : Metadata = {
    title: "Регистрация | Forgotten God"
}

export default async function Layout({children} : {children: React.ReactNode}) {

    const userInfo = (await auth()).user
    if (userInfo) redirect("/")
    
    return (
    <>
        {children}
    </>
)
}