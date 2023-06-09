import store from "@/store/store"
import { AdminPagesLink, AdminPagesLinkDescription, AdminLinks, AdminPanel, AdminWrapper, AdminUsersSVG, AdminSalesSVG, AdminCreateProductSVG, AdminProductsSVG, AdminTagsSVG } from "./styles"
import { Metadata } from "next"
import { getUser } from "@/components/Layout/BasePageLayout"
import AdminLayout from "./components/AdminLayout/AdminLayout"

export const metadata: Metadata = {
    title: "Панель администратора | Forgotten God"
}


export default async function Layout({children} : {children: React.ReactNode}){
    /* const userInfo = await getUser()
    if (!userInfo){
        return (
            <div>
                User is not admin
            </div>
        )
    } */
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}