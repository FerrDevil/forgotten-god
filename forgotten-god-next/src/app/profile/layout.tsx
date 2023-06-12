import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Библиотека"
}

export default function Layout({children}){
    return <>{children}</>
}