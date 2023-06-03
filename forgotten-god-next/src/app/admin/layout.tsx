import store from "@/store/store"
import { AdminPagesLink, AdminPagesLinkDescription, AdminLinks, AdminPanel, AdminWrapper, AdminUsersSVG, AdminSalesSVG, AdminCreateProductSVG, AdminProductsSVG, AdminTagsSVG } from "./styles"
import { Metadata } from "next"
import { getUser } from "@/components/Layout/BasePageLayout"

export const metadata: Metadata = {
    title: "Панель администратора | Forgotten God"
}


export default async function Layout({children} : {children: React.ReactNode}){
    const userInfo = await getUser()
    if (!userInfo){
        return (
            <div>
                User is not admin
            </div>
        )
    }
    return (
        <AdminWrapper>
            <AdminLinks>
                <AdminPagesLink href="/admin/users" >
                    <AdminUsersSVG/>
                    <AdminPagesLinkDescription>Пользователи</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/sales" >
                    <AdminSalesSVG/>
                    <AdminPagesLinkDescription>Продажи</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/products" >
                    <AdminProductsSVG/>
                    <AdminPagesLinkDescription>Продукты</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/tags">
                    <AdminTagsSVG/>
                    <AdminPagesLinkDescription>Тэги</AdminPagesLinkDescription>
                </AdminPagesLink>
                <AdminPagesLink href="/admin/createProduct" >
                    <AdminCreateProductSVG/>
                    <AdminPagesLinkDescription>Добавить продукт</AdminPagesLinkDescription>
                </AdminPagesLink>
                
            </AdminLinks>
            <AdminPanel>
                {children}
            </AdminPanel>
        </AdminWrapper>
    )
}